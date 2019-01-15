# 前端概念 IoC

https://zhuanlan.zhihu.com/p/53832991


## IoC

IoC 的全称叫做 Inversion of Control，可翻译为为「控制反转」或「依赖倒置」，它主要包含了三个准则：

高层次的模块不应该依赖于低层次的模块，它们都应该依赖于抽象
抽象不应该依赖于具体实现，具体实现应该依赖于抽象
面向接口编程 而不要面向实现编程

## 依赖注入

假设需要构建一款应用叫 App，它包含一个路由模块 Router 和一个页面监控模块 Track，不能一开始就把模块构造到 APP 内部。
所谓的依赖注入，简单来说就是把高层模块所依赖的模块通过传参的方式把依赖「注入」到模块内部，上面的代码可以通过依赖注入的方式改造成如下方式：

```js
class App {
    constructor(options) {
        this.options = options;
        this.router = options.router;
        this.track = options.track;
        this.init();
    }
    init() {
        window.addEventListener('DOMContentLoaded', () => {
            this.router.to('home');
            this.track.tracking();
            this.options.onReady();
        });
    }
}
// index.js
import App from 'path/to/App';
import Router from './modules/Router';
import Track from './modules/Track';

new App({
    router: new Router(),
    track: new Track(),
    onReady() {
        // do something here...
    },
});
```


虽然 App 通过依赖注入的方式在一定程度上解耦了与其他几个模块的依赖关系，但是还不够彻底，其中的 this.router 和 this.track 等属性其实都还是对「具体实现」的依赖，明显违背了 IoC 思想的准则，那如何进一步抽象 App 模块呢。

```js
class App {
    static modules = []
    constructor(options) {
        this.options = options;
        this.init();
    }
    init() {
        window.addEventListener('DOMContentLoaded', () => {
            this.initModules();
            this.options.onReady(this);
        });
    }
    static use(module) {
        Array.isArray(module) ? module.map(item => App.use(item)) : App.modules.push(module);
    }
    initModules() {
        App.modules.map(module => module.init && typeof module.init == 'function' && module.init(this));
    }
}
```

经过改造后 App 内已经没有「具体实现」了，看不到任何业务代码了，那么如何使用 App 来管理我们的依赖呢：

```js
// modules/Router.js
import Router from 'path/to/Router';
export default {
    init(app) {
        app.router = new Router(app.options.router);
        app.router.to('home');
    }
};
// modules/Track.js
import Track from 'path/to/Track';
export default {
    init(app) {
        app.track = new Track(app.options.track);
        app.track.tracking();
    }
};

// index.js
import App from 'path/to/App';
import Router from './modules/Router';
import Track from './modules/Track';

App.use([Router, Track]);

new App({
    router: {
        mode: 'history',
    },
    track: {
        // ...
    },
    onReady(app) {
        // app.options ...
    },
});
```

可以发现 App 模块在使用上也非常的方便，通过 App.use() 方法来「注入」依赖，在 ./modules/some-module.js 中按照一定的「约定」去初始化相关配置，比如此时需要新增一个 Share 模块的话，无需到 App 内部去修改内容：

```js
// modules/Share.js
import Share from 'path/to/Share';
export default {
    init(app) {
        app.share = new Share();
        app.setShare = data => app.share.setShare(data);
    }
};

// index.js
App.use(Share);
new App({
    // ...
    onReady(app) {
        app.setShare({
            title: 'Hello IoC.',
            description: 'description here...',
            // some other data here...
        });
    }
});
```

直接在 App 外部去 use 这个 Share 模块即可，对模块的注入和配置极为方便。

那么在 App 内部到底做了哪些工作呢，首先从 App.use 方法说起：

```js
class App {
    static modules = []
    static use(module) {
        Array.isArray(module) ? module.map(item => App.use(item)) : App.modules.push(module);
    }
}
```

可以很清楚的发现，App.use 做了一件非常简单的事情，就是把依赖保存在了 App.modules 属性中，等待后续初始化模块的时候被调用。

接下来我们看一下模块初始化方法 this.initModules() 具体做了什么事情：

```js
class App {
    initModules() {
        App.modules.map(module => module.init && typeof module.init == 'function' && module.init(this));
    }
}
```

可以发现该方法同样做了一件非常简单的事情，就是遍历 App.modules 中所有的模块，判断模块是否包含 init 属性且该属性必须是一个函数，如果判断通过的话，该方法就会去执行模块的 init 方法并把 App 的实例 this 传入其中，以便在模块中引用它。

从这个方法中可以看出，要实现一个可以被 App.use() 的模块，就必须满足两个「约定」：

模块必须包含 init 属性
init 必须是一个函数
这其实就是 IoC 思想中对「面向接口编程 而不要面向实现编程」这一准则的很好的体现。App 不关心模块具体实现了什么，只要满足对 接口 init 的「约定」就可以了。

此时回去看 Router 的模块的实现就可以很容易理解为什么要怎么写了：

```js
// modules/Router.js
import Router from 'path/to/Router';
export default {
    init(app) {
        app.router = new Router(app.options.router);
        app.router.to('home');
    }
};
```

App 模块此时应该称之为「容器」比较合适了，跟业务已经没有任何关系了，它仅仅只是提供了一些方法来辅助管理注入的依赖和控制模块如何执行。

控制反转（Inversion of Control）是一种「思想」，依赖注入（Dependency Injection）则是这一思想的一种具体「实现方式」，而这里的 App 则是辅助依赖管理的一个「容器」。
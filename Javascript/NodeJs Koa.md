# NodeJs Koa

[参考1](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001471087582981d6c0ea265bf241b59a04fa6f61d767f6000)

[参考2](http://www.ruanyifeng.com/blog/2017/08/koa.html)

[官方文档](https://koa.bootcss.com/#)

> `async`标记的函数称为异步函数，在异步函数中，可以用`await`调用另一个异步函数，这两个关键字将在ES7中引入

## 架设 HTTP 服务

```js
const koa = require('koa')
const app = new koa()

console.log('👉: localhost:3000')

app.listen(3000)
```



##  Context 对象

> Koa 提供一个 Context 对象，表示一次对话的上下文（包括 HTTP 请求和 HTTP 回复）。通过加工这个对象，就可以控制返回给用户的内容
>
> `ctx`是由koa传入的封装了request和response的变量
>
> `next`是koa传入的将要处理的下一个异步函数。



每收到一个http请求，koa就会调用通过`app.use()`注册的async函数，并传入`ctx`和`next`参数

>异步函数中，我们首先用`await next();`处理下一个异步函数，为什么要调用`await next()`？原因是koa把很多async函数组成一个处理链，每个async函数都可以做一些自己的事情，然后用`await next()`来调用下一个async函数。我们把每个async函数称为middleware，这些middleware可以组合起来，完成很多有用的功能。

middleware的顺序很重要，也就是调用`app.use()`的顺序决定了middleware的顺序

此外，如果一个middleware没有调用`await next()`，会怎么办？答案是后续的middleware将不再执行了。这种情况也很常见，例如，一个检测用户权限的middleware可以决定是否继续处理请求，还是直接返回403错误：

```js
app.use(async (ctx, next) => {
    if (await checkUserPermission(ctx)) {
        await next();
    } else {
        ctx.response.status = 403;
    }
});
```



- `context.response.body `属性就是发送给用户的内容
- `ctx.response`代表 HTTP Response
- `ctx.request`代表 HTTP Request

```js
const koa = require('koa');
const app = new koa();

const main = async (ctx, next) => {
  await next()
  ctx.response.body = 'hello koa!'
}

console.log('👉: localhost:3000')

app.use(main)

app.listen(3000)

```



### 网页模板

实际开发中，返回给用户的网页往往都写成模板文件。我们可以让 Koa 先读取模板文件，然后将这个模板返回给用户。

```js
const fs = require('fs')
const koa = require('koa');
const app = new koa();

const main = async (ctx, next) => {
  await next()
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream('./index.html');
}

console.log('👉: localhost:3000')

app.use(main)

app.listen(3000)

```

## 路由

### 原生路由

网站一般都有多个页面。通过`ctx.request.path`可以获取用户请求的路径，由此实现简单的路由

```js
if (ctx.request.path !== '/') {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a>';
  } else {
    ctx.response.body = 'Hello World';
  }
```

### koa-router 模块

`/` 处理的函数时 main

`/user` 处理的函数时 user

```js
const fs = require('fs')
const koa = require('koa')
const app = new koa()
const router = require('koa-router')()

const main = router.get('/', async (ctx, next) => {
  await next()
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream('./index.html')
})

const user = router.get('/user', async (ctx, next) => {
  ctx.response.type = 'json'
  const data = {
    name: 'yushifan'
  }
  ctx.response.body = JSON.stringify(data)
  await next()
})

console.log('👉: localhost:3000')

app.use(main.routes())
app.use(user.routes())

app.listen(3000)
```

用post请求处理URL时，我们会遇到一个问题：post请求通常会发送一个表单，或者JSON，它作为request的body发送，但无论是Node.js提供的原始request对象，还是koa提供的request对象，都*不提供*解析request的body的功能！

所以，我们又需要引入另一个middleware来解析原始request请求，然后，把解析后的参数，绑定到`ctx.request.body`中。

`koa-bodyparser`就是用来干这个活的



### 重定向

有些场合，服务器需要重定向（redirect）访问请求。`ctx.response.redirect()`方法可以发出一个302跳转



## 中间件

Koa 的最大特色，也是最重要的一个设计，就是中间件（middleware）。为了理解中间件，我们先看一下 Logger （打印日志）功能的实现。

```js
const json = require('koa-json')
const fs = require('fs')
const koa = require('koa')
const app = new koa()
const router = require('koa-router')()

app.use(json())

const main = router.get('/', async (ctx, next) => {
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream('./index.html');
  await next()
})

const user = router.get('/user', async (ctx, next) => {
  const data = {
    name: 'yushifan'
  }
  ctx.response.body = JSON.stringify(data)
  await next()
})

const logger = async (ctx, next) => {
  console.log(`${Date.now()} / ${ctx.request.method} ${ctx.request.url}`)
  await next()
}

console.log('👉: localhost:3000')

app.use(main.routes())
app.use(user.routes())

app.use(logger) // logger 就是一个中间件

app.listen(3000)

```

中间件（middleware）必须是一个函数，`app.use()`用来加载中间件

### 中间件栈

多个中间件会形成一个栈结构（middle stack），以"先进后出"（first-in-last-out）的顺序执行。

1. 最外层的中间件首先执行。
2. 调用`next`函数，把执行权交给下一个中间件。
3. ...
4. 最内层的中间件最后执行。
5. 执行结束后，把执行权交回上一层的中间件。
6. ...
7. 最外层的中间件收回执行权之后，执行`next`函数后面的代码。



```js
const one = (ctx, next) => {
  console.log('>> one');
  next();
  console.log('<< one');
}

const two = (ctx, next) => {
  console.log('>> two');
  next(); 
  console.log('<< two');
}

const three = (ctx, next) => {
  console.log('>> three');
  next();
  console.log('<< three');
}

app.use(one);
app.use(two);
app.use(three);
```



```js
>> one
>> two
>> three
<< three
<< two
<< one
```



### 中间件的合成

[`koa-compose`](https://www.npmjs.com/package/koa-compose)模块可以将多个中间件合成为一个

```js
const compose = require('koa-compose');

const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next();
}

const main = ctx => {
  ctx.response.body = 'Hello World';
};

const middlewares = compose([logger, main]);
app.use(middlewares);
```

## 静态资源

如果网站提供静态资源（图片、字体、样式表、脚本......），为它们一个个写路由就很麻烦，也没必要。[`koa-static`](https://www.npmjs.com/package/koa-static)模块封装了这部分的请求。请看下面的例子（完整代码看[这里](https://github.com/ruanyf/koa-demos/blob/master/demos/12.js)）。

> ```
> const path = require('path');
> const serve = require('koa-static');
>
> const main = serve(path.join(__dirname));
> app.use(main);
>
> ```

运行这个 Demo。

> ```
> $ node demos/12.js
> ```


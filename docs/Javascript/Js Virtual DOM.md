# Js Virtual DOM

https://www.jianshu.com/p/bef1c1ee5a0e

http://caibaojian.com/vue-vs-react.html

Vue 和 React 的一个最大的相似点就是使用了 virtual dom 即 虚拟 DOM

> 它的诞生是基于这么一个概念：改变真实的DOM状态远比改变一个JavaScript对象的花销要大得多。

web 早期页面通常是静态的，页面内容不会变化，但如果数据发生了变化，通常需要重新加载整个页面。后来再到页面复杂，数据变化时，只更改数据变化了的 DOM，通过 js 改变 dom，然后出现了 MVVM 这类的框架，将数据模型和 DOM 绑定后，监听数据变化，当数据变化后，更新对应的绑定的 DOM。然后就到了类似 React 等的 virtual DOM 的方式。

> Virtual DOM 概况来讲，就是在数据和真实 DOM 之间建立了一层缓冲

当数据变化时，重新渲染这个过程中，并没有得到新的 DOM 进行替换，而是先生成了 virtual DOM 与上一次的 virtual DOM 进行比较在渲染得到的 Virtual DOM 上发现变化，然后将变化的地方更新到真实 DOM 上。

## Virtual DOM

React 基于 Virtual DOM 的数据更新与UI同步机制：

![img](https://upload-images.jianshu.io/upload_images/37341-f3b6642818c8c17f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/536)

React - 初始渲染

初始渲染时，首先将数据渲染为 Virtual DOM，然后由 Virtual DOM 生成 DOM。

![img](https://upload-images.jianshu.io/upload_images/37341-f3172ab2917534d7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/531)

数据更新时，渲染得到新的 Virtual DOM，与上一次得到的 Virtual DOM 进行 diff，得到所有需要在 DOM 上进行的变更，然后在 patch 过程中应用到 DOM 上实现UI的同步更新。

总的来说

> 如果需要改变任何元素的状态，那么是先在Virtual DOM上进行改变，而不是直接改变真实的DOM。当有变化产生时，一个新的Virtual DOM对象会被创建并计算新旧Virtual DOM之间的差别。之后这些差别会应用在真实的DOM上。

vitural dom 是一个映射真实 DOM 的 JavaScript 对象

真实的 DOM

```html
<ul class="list">
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
</ul>
```

而在JavaScript中，可以简单的创建一个映射的 Virtual DOM

```js
const VNode = {
	type: 'ul',
    props: {'class': 'list'},
    children: [
        { type: 'li',  props: {}, children: ['item 1'] }
        { type: 'li',  props: {}, children: ['item 2'] }
        { type: 'li',  props: {}, children: ['item 3'] }
    ]
}
```

> 本质上是一个嵌套着数组的原生对象。

如果你的应用中，交互复杂，需要处理大量的UI变化，那么使用Virtual DOM是一个好主意。如果你更新元素并不频繁，那么Virtual DOM并不一定适用，性能很可能还不如直接操控DOM。
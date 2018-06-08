#  Js 事件冒泡与捕获

https://segmentfault.com/a/1190000005654451

http://www.cnblogs.com/bfgis/p/5460191.html

http://javascript.ruanyifeng.com/dom/event.html#toc1

## addEventListener

使用事件监听函数`element.addEventListener(<event-name>, <callback>, <use-capture>);`，在 element 这个对象上面添加一个事件监听器，当监听到有event-name 事件发生的时候，调用 这个回调函数。至于 use-capture 这个参数，表示该事件监听是在“捕获”阶段中监听（设置为 true）还是在“冒泡”阶段中监听（设置为 false）。第三个参数除了布尔值`useCapture`，还可以是一个属性配置对象。该对象有以下属性。

> - `capture`：布尔值，表示该事件是否在`捕获阶段`触发监听函数。
> - `once`：布尔值，表示监听函数是否只触发一次，然后就自动移除。
> - `passive`：布尔值，表示监听函数不会调用事件的`preventDefault`方法。如果监听函数调用了，浏览器将忽略这个要求，并在监控台输出一行警告。(该方法为，取消这个事件。一旦事件被取消，就好像从来没有发生过，不会触发浏览器对该事件的默认行为。)

## 事件冒泡

微软提出了名为`事件冒泡(event bubbling)`的事件流。事件冒泡可以形象地比喻为把一颗石头投入水中，泡泡会一直从水底冒出水面。也就是说，事件会从最内层的元素开始发生，一直向上传播，直到document对象。

因此在事件冒泡的概念下在p元素上发生click事件的顺序应该是**p -> div -> body -> html -> document**

实例：

```html
<div id="s1">
  s1
  <div id="s2">
     s2
  </div>
</div>
```

```js
const s1 = document.getElementById('s1')

s1.addEventListener('click', function(e) {
	console.log('s1 click')
}, false)

const s2 = document.getElementById('s2')

s2.addEventListener('click', function(e) {
	console.log('s2 click')
}, false)
```

- 点击 S2 执行顺序 => s2 click , s1 click

## 事件捕获

网景提出另一种事件流名为`事件捕获(event capturing)`。与事件冒泡相反，事件会从最外层开始发生，直到最具体的元素。

因此在事件捕获的概念下在p元素上发生click事件的顺序应该是**document -> html -> body -> div -> p**

实例：

```html
<div id="s1">
  s1
  <div id="s2">
     s2
  </div>
</div>
```

```js
const s1 = document.getElementById('s1')

s1.addEventListener('click', function(e) {
	console.log('s1 click')
}, true)

const s2 = document.getElementById('s2')

s2.addEventListener('click', function(e) {
	console.log('s2 click')
}, true)
```

- 点击 S2 执行顺序 => s1 click , s2 click

## Event.stopPropagation()

`stopPropagation`方法阻止事件在 DOM 中继续传播，防止再触发定义在别的节点上的监听函数，但是不包括在当前节点上其他的事件监听函数。如果父子元素均添加了事件监听，而只执行子元素中的，不让父元素的发生就使用该方法，停止传播：

```js
const s1 = document.getElementById('s1')

s1.addEventListener('click', function(e) {
	console.log('s1 click')
}, false)

const s2 = document.getElementById('s2')

s2.addEventListener('click', function(e) {
	console.log('s2 click')
  	e.stopPropagation()
}, false)
```

- 点击 S2 执行顺序 => s2 click
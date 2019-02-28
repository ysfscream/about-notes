# React 元素和组件的区别

- 元素是用来展现 DOM 节点或组件的一个普通 JavaScript 对象。元素是一个纯的，不需要进行状态变化且创建成本较低的对象。

- 组件是一个方法或者类。组件可以有 state 并且可以将 props 作为输入然后返回一个元素的树形结构作为为输出（虽然他们可以表示一个通用的容器或包装器，但 DOM 的提交并不是必须的）。组件在生命周期的方法中可能会引起副作用（如 AJAX 请求，DOM 修改，第三方库的接口），而且他的创建可能会需要更过的消耗。

```javascript
const Component = () => "Hello"
const componentElement = <Component />
const domNodeElement = <div />
```

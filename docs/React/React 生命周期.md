# React 生命周期

> React.js 将组件渲染，并且构造 DOM 元素然后塞入页面的过程称为组件的挂载

## 具体流程

```javascript
class Com extends Component {
  constructor() {}

  componentWillMount() {}

  render() {}
  
  // 然后构造 DOM 元素插入页面
  
  componentDidMount() {}

  // 即将从页面中删除

  componentWillUnmount() {}
}
```

componentWillMount 和 componentDidMount 都是可以像 render 方法一样自定义在组件的内部。挂载的时候，React.js 会在组件的 render 之前调用

- componentWillMount：组件挂载开始之前，也就是在组件调用 render 方法之前调用。
- componentDidMount：组件挂载完成以后，也就是 DOM 元素已经插入页面后调用。
- componentWillUnmount：组件对应的 DOM 元素从页面中删除之前调用。

### 关于更新阶段的组件生命周期：

- shouldComponentUpdate(nextProps, nextState)：你可以通过这个方法控制组件是否重新渲染。如果返回 false 组件就不会重新渲染。这个生命周期在 React.js 性能优化上非常有用。
- componentWillReceiveProps(nextProps)：组件从父组件接收到新的 props 之前调用。
- componentWillUpdate()：组件开始重新渲染之前调用。
- componentDidUpdate()：组件重新渲染并且把更改变更到真实的 DOM 以后调用。

## 作用

- 一些组件启动的动作，包括像 Ajax 数据的拉取操作、一些定时器的启动等，就可以放在 componentWillMount 里面进行

```javascript
componentWillMount() {
  ajax.get('/api/v1/test').then(res => {
    this.setState({
      data: res.data
    })
  })
}
```

- 一些组件销毁时，比如清除定时器等 可以在 componentWillUnmount 里面进行

```javascript
componentWillUnmount() {
  clear(this.timer)
}
```

我们一般会把组件的 state 的初始化工作放在 constructor 里面去做；在 componentWillMount 进行组件的启动工作，例如 Ajax 数据拉取、定时器的启动；组件从页面上销毁的时候，有时候需要一些数据的清理，例如定时器的清理，就会放在 componentWillUnmount 里面去做。

## 生命周期的不同阶段

- Initialization：在这个阶段，组件准备设置初始化状态和默认属性。

- Mounting：react 组件已经准备装载到 DOM 上。这个阶段包含 getDerivedStateFromProps 和 componentDidMount 生命周期方法。

- Updating：在这个阶段，组件通过两种方式进行更新，发送新的属性和更新状态。这个阶段包含 getDerivedStateFromProps，shouldComponentUpdate，getSnapshotBeforeUpdate 和 componentDidUpdate 生命周期方法。

- Unmounting：在这个阶段，组件已经不再被需要了，他从浏览器 DOM 中卸载下来。这个阶段包含 componentWillUnmount 生命周期方法。

- Error Handling：在这个阶段，不论在渲染的过程中，还是在生命周期方法中或是在任何子组件的构造函数中发生错误，该组件都会被调用。这个阶段包含了 componentDidCatch 生命周期方法。

![react](/about-notes/media/React-1.jpg)

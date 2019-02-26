# React DOM 操作

React.js 当中提供了 ref 属性来帮助我们获取已经挂载的元素的 DOM 节点，你可以给某个 JSX 元素加上 ref属性：

```javascript
class Index extends Component {
  showClass() {
    console.log(this.divDom) // <div class="ref.list">Hello<div/>
  }
  render() {
    return (
      <div ref={(div) => this.div = div} className="ref-list">
        Hello
      </div>
    )
  };
};
```

这个属性值是一个函数，当元素在页面上挂载完成以后，React.js 就会调用这个函数，并且把这个挂载以后的 DOM 节点传给这个函数。在函数中我们把这个 DOM 元素设置为组件实例的一个属性，这样以后我们就可以通过 this 获取到这个 DOM 元素。

然后我们就可以在 componentDidMount 中使用这个 DOM 元素。

但是记住一个原则：能不用 ref 就不用。特别是要避免用 ref 来做 React.js 本来就可以帮助你做到的页面自动更新的操作和事件监听。多余的 DOM 操作其实是代码里面的“噪音”，不利于我们理解和维护。

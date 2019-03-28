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

Refs 是使用 React.createRef() 方法创建的，他通过 ref 属性附加到 React 元素上。要在整个组件中使用 Refs，需要将 ref 在构造函数中分配给其实例属性

```javascript
class RefTest extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.showClass = this.showClass.bind(this);
  }
  showClass() {
    console.log(this.myRef.current); // <div class="123"><button>show class</button></div>
  }
  render() {
    return (
      <div className="123" ref={this.myRef}>
        <button onClick={this.showClass}>show class</button>
      </div>
    );
  }
}
```

这个属性值是一个函数，当元素在页面上挂载完成以后，React.js 就会调用这个函数，并且把这个挂载以后的 DOM 节点传给这个函数。在函数中我们把这个 DOM 元素设置为组件实例的一个属性，这样以后我们就可以通过 this 获取到这个 DOM 元素。

然后我们就可以在 componentDidMount 中使用这个 DOM 元素。

但是记住一个原则：能不用 ref 就不用。特别是要避免用 ref 来做 React.js 本来就可以帮助你做到的页面自动更新的操作和事件监听。多余的 DOM 操作其实是代码里面的“噪音”，不利于我们理解和维护。

如下一些场景使用 Refs 却更为适合：

- 处理焦点、文本选择或者媒体的控制

- 触发必要的动画

- 集成第三方 DOM 库

**注意**：

- 不应该过度的使用 Refs

- ref 的返回值取决于节点的类型：
  - 当 ref 属性被用于一个普通的 HTML 元素时，React.createRef() 将接收底层 DOM 元素作为他的 current 属性以创建 ref。
  - 当 ref 属性被用于一个自定义的类组件时，ref 对象将接收该组件已挂载的实例作为他的 current。

- 当在父组件中需要访问子组件中的 ref 时可使用传递 Refs 或回调 Refs

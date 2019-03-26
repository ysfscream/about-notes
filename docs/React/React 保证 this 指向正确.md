# React 保证 this 指向正确

可以使用 Function.prototype.bind() 强制将组件实例作为 this 上下文。

``` javascript
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}
handleClick() {}
```

bind 不仅啰嗦而且需要定义一个 constructor

使用新的公共类字段语法：

```javascript
handleClick = () => {
  console.log('this is:', this);
}

render() {
  return (
    <button onClick={this.handleClick}>
      Click me
    </button>
  );
}
```

或者使用内联的箭头函数你，因为 this（组件实例）是受到保护的：

```html
<button onClick={e => this.handleClick(e)}>Click me</button>
```

**注意**：使用内联箭头函数会产生额外的再次渲染，因为在渲染时会创建一个新的函数引用，这样新的引用就会传递给子组件并且中断 shouldComponentUpdate / PureComponent 的相等检查来阻止不必要的重新渲染。在性能很重要的情况下，最好在构造函数中使用 bind 或优先使用公共类字段语法，因为他们的函数引用是保持不变的。

链接：https://hacpai.com/article/1552557593163

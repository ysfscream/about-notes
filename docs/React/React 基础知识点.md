# React 基础知识点

https://react.docschina.org/

https://reactjs.org/

## 组件

- 简单的组件

react 使用 jsx 语法，输入的数据通过 this.props 传入 render() 方法。

```javascript
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  mountNode
);
```

- 有状态组件

  除了使用外部传入的数据以外 (通过 this.props 访问传入数据), 组件还可以拥有其内部的状态数据 (通过 this.state 访问状态数据)。 当组件的状态数据改变时， 组件会调用 render() 方法重新渲染。

```javascript
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

ReactDOM.render(<Timer />, mountNode);
```

**注意：**

1. JSX 是 JavaScript 语言的一种语法扩展，长得像 HTML，但并不是 HTML。

2. React.js 可以用 JSX 来描述你的组件长什么样的。

3. JSX 在编译的时候会变成相应的 JavaScript 对象描述。

4. `react-dom`负责把这个用来描述 UI 信息的 JavaScript 对象变成 DOM 元素，并且渲染到页面上。

5. 我们在文件头部从`react`的包当中引入了`React`和 React.js 的组件父类`Component`。记住，只要你要写 React.js 组件，那么就必须要引入这两个东西。



在 JSX 当中你可以插入 JavaScript 的表达式，表达式返回的结果会相应地渲染到页面上。表达式用`{}`包裹。jsx 中使用 {} 可以展示任何数据, 如果你往 {} 放一个数组，React.js 会帮你把数组里面一个个元素罗列并且渲染出来。

简而言之，`{}`内可以放任何 JavaScript 的代码，包括变量、表达式计算、函数执行等等，也可以放 JSX。`render`会把这些代码返回的内容如实地渲染到页面上，非常的灵活。

表达式插入不仅仅可以用在标签内部，也可以用在标签的属性上，例如：

```javascript
render () {
  const className = 'header'
  return (
    <div className={className}>
      <h1>React Test</h1>
    </div>
  )
}
```

**注意：**

直接使用`class`在 React.js 的元素上添加类名如`<div class=“xxx”>`这种方式是不合法的。因为`class`是 JavaScript 的关键字，所以 React.js 中定义了一种新的方式：`className`来帮助我们给元素添加类名。

还有一个特例就是`for`属性，例如`<label for='male'>Male</label>`，因为`for`也是 JavaScript 的关键字，所以在 JSX 用`htmlFor`替代，即`<label htmlFor='male'>Male</label>`。而其他的 HTML 属性例如`style`、`data-*`等就可以像普通的 HTML 属性那样直接添加上去。



React.js 中一切皆组件，用 React.js 写的其实就是 React.js 组件。我们在编写 React.js 组件的时候，一般都需要继承 React.js 的`Component`（还有别的编写组件的方式我们后续会提到）。**一个组件类必须要实现一个`render`方法，这个`render`方法必须要返回一个 JSX 元素。**但这里要注意的是，必须要用一个外层的 JSX 元素把所有内容包裹起来。

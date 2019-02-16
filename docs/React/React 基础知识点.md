# React 基础知识点

https://react.docschina.org/

https://reactjs.org/

## 组件

- 简单的组件

react 使用 jsx 语法，输入的数据通过 this.props 传入 render() 方法。

```js
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

```js
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

jsx 中使用 {} 可以展示任何数据, 如果你往 {} 放一个数组，React.js 会帮你把数组里面一个个元素罗列并且渲染出来。
# React 基础知识点

https://react.docschina.org/

https://reactjs.org/

## 组件

- 简单的组件

react 使用 jsx 语法，输入的数据通过 this.props 传入 render() 方法，props 一旦传入，你就不可以在组件内部对它进行修改。但是你可以通过父组件主动重新渲染的方式来传入新的 props，从而达到更新的效果。

自定义的组件都必须要用大写字母开头，普通的 HTML 标签都用小写字母开头。

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

  除了使用外部传入的数据以外 (通过 this.props 访问传入数据), 组件还可以拥有其内部的状态数据 (通过 this.state 访问状态数据)。 `setState`方法由父类`Component`所提供。**当我们调用这个函数的时候，React.js 会更新组件的状态`state`，并且重新调用`render`方法，然后再把`render`方法所渲染的最新的内容显示到页面上**。**它接受一个对象或者函数作为参数**。当组件的状态数据改变时， 组件会调用 render() 方法重新渲染。

`setState`传入一个对象的时候，这个对象表示该组件的新状态。但你只需要传入需要更新的部分就可以了。

如果你想在`setState`之后使用新的`state`来做后续运算就做不到了。

```jsx
handleClickButton () {
    this.setState({ count: 0 }) // undefined
    this.setState({ count: this.state.count + 1 }) // undefined + 1 = NaN
}
```

`setState`把你的传进来的状态缓存起来，稍后才会帮你更新到`state`上，需要传入函数。

```jsx
handleClickOnLikeButton () {
    this.setState((prevState) => {
      return { count: 0 }
    })
    this.setState((prevState) => {
      return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
    })
    this.setState((prevState) => {
      return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
    })
    // 最后的结果是 this.state.count 为 3
  }
```

- 函数式组件

React.js 非常鼓励无状态组件。
以前一个组件是通过继承 Component 来构建，一个子类就是一个组件。而用函数式的组件编写方式是一个函数就是一个组件，你可以和以前一样通过 `<HellWorld />` 使用该组件。不同的是，函数式组件只能接受 props 而无法像跟类组件一样可以在 constructor 里面初始化 state。你可以理解函数式组件就是一种只能接受 props 和提供 render 方法的类组件。

```javascript
const HelloWorld = (props) => {
  const sayHi = (event) => alert('Hello World')
  return (
    <div onClick={sayHi}>Hello World</div>
  )
}
```


**注意：**

1. JSX 是 JavaScript 语言的一种语法扩展，长得像 HTML，但并不是 HTML。

2. React.js 可以用 JSX 来描述你的组件长什么样的。

3. JSX 在编译的时候会变成相应的 JavaScript 对象描述。

4. `react-dom`负责把这个用来描述 UI 信息的 JavaScript 对象变成 DOM 元素，并且渲染到页面上。

5. 我们在文件头部从`react`的包当中引入了`React`和 React.js 的组件父类`Component`。记住，只要你要写 React.js 组件，那么就必须要引入这两个东西。

6. state 是让组件控制自己的状态，props 是让外部对组件自己进行配置。

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

## 事件监听

只需要给需要监听事件的元素加上属性类似于`onClick`、`onKeyDown`这样的属性，在 React.js 不需要手动调用浏览器原生的`addEventListener`进行事件监听。帮我们封装好了一系列的`on*`的属性。React.js 会给每个事件监听传入一个`event`对象，这个对象提供的功能和浏览器提供的功能一致，而且它是兼容所有浏览器的。

**这些`on*`的事件监听只能用在普通的 HTML 的标签上，而不能用在组件标签上**。

事件监听函数内并不能通过`this`获取到实例，需要手动添加 bind(this)，如果你想在事件函数当中使用当前的实例，你需要手动地将实例方法`bind`到当前实例上再传入给 React.js。

```javascript
class CustomButton extends Component {
  handleClickOnTitle (e) {
    console.log(this)
  }

  render () {
    return (
      <button onClick={this.handleClickOnTitle.bind(this)}>Button</button>
    )
  }
}
```

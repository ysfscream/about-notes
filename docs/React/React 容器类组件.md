# React 容器类组件

在 Vue 中可以使用 slot 插槽来在自定义组件中添加新的 DOM 标签元素。它定义了一种外层结构形式，然后你可以往里面塞任意的内容。

React.js 默认就支持这种写法，所有嵌套在组件中的 JSX 结构都可以在组件内部通过 props.children 获取到。

```javascript
// 容器组件
const Card = props => {
  console.log(props.children);
  return (
    <div className="Card">
      <h1>{props.children[0]}</h1>
      <p>{props.children[1]}</p>
    </div>
  );
};

// 父组件
const App = () => {
  return (
    <div className="App">
      <Card>
        Hello
        <em>World</em>
      </Card>
    </div>
  );
};
```

props.children 它其实是个数组, 是你传入进来的元素的顺序。

打印出来的 Children 是：

```Javascript
["Hello", Object]

0: "Hello"
1: Object
  type: "em"
  key: null
  ref: null
  props: Object
  _owner: FiberNode
  _store: Object
```

React API 提供了 children 属性的方法：React.Children.map，React.Children.forEach，React.Children.count，React.Children.only 和 React.Children.toArray。


# React Context 概念

Context 提供了一种传递数据的方式，他不需要你手动的通过组件树从上至下逐层传递属性。例如：在应用程序中需要通过许对组件才能获取用户身份验证、本地设置、UI 主题。

- Context 提供了一种通过 React 组件树传递数据的方法，他不需要手动传递属性。
- Context 主要为解决 React 组件树中被认为全局数据的共享。
除了实例中的 context，React 组件还可以通过 constructor(props, context)、componentWillReceiveProps(nextProps, nextContext)、shouldComponentUpdate(nextProps, nextState, nextContext) 和 componetWillUpdate(nextProps, nextState, nextContext) 直接访问父组件提供的 Context。
- 使用 Context，可以跨越组件进行数据的传递

Context 设计目的是为共享那些被认为对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言。例如，在下面的代码中，我们通过一个“theme”属性手动调整一个按钮组件的样式：

```javascript
function ThemedButton(props) {
  return <Button theme={props.theme} />;
}

// 中间组件
function Toolbar(props) {
  // Toolbar 组件必须添加一个额外的 theme 属性
  // 然后传递它给 ThemedButton 组件
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

class App extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}
```

使用 context, 我可以避免通过中间元素传递 props：

```javascript
// 创建一个 theme Context,  默认 theme 的值为 light
const ThemeContext = React.createContext('light');

function ThemedButton(props) {
  // ThemedButton 组件从 context 接收 theme
  return (
    <ThemeContext.Consumer>
      {theme => <Button {...props} theme={theme} />}
    </ThemeContext.Consumer>
  );
}

// 中间组件
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}
```

**注意**：

不要仅仅为了避免在几个层级下的组件传递 props 而使用 context，它是被用于在多个层级的多个组件需要访问相同数据的情景。
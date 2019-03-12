# React Context 概念

Context 提供了一种传递数据的方式，他不需要你手动的通过组件树从上至下逐层传递属性。例如：在应用程序中需要通过许对组件才能获取用户身份验证、本地设置、UI 主题。

- Context 提供了一种通过 React 组件树传递数据的方法，他不需要手动传递属性。
- Context 主要为解决 React 组件树中被认为全局数据的共享。
除了实例中的 context，React 组件还可以通过 constructor(props, context)、componentWillReceiveProps(nextProps, nextContext)、shouldComponentUpdate(nextProps, nextState, nextContext) 和 componetWillUpdate(nextProps, nextState, nextContext) 直接访问父组件提供的 Context。
- 使用 Context，可以跨越组件进行数据的传递
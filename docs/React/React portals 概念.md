# React portals 概念

Portals 提供了一种很好的将子节点渲染到父组件外部 DOM 层级中的 DOM 节点中的方式。

```javascript
ReactDOM.createPortal(child, container)
```

第一个参数（child）是任意可渲染的 React 子元素，例如一个元素，字符串或片断。第二个参数（container）是一个 DOM 元素。

**注意**：

- 通常从组件的 render 方法中返回的一个元素，该元素仅能装配到 DOM 节点中离其最近的父元素，但有时候也需要将其插入到 DOM 节点中的不同位置：

```Javascript
render() {
  // React 不会创建新的 div。他渲染子元素到 `domNode` 中。
  // `domNode` 可以是任意有效的 DOM 节点，无论他在 DOM 中的位置如何。
  return ReactDOM.createPortal(
    this.props.children,
    domNode,
  );
}
```

- 对于 portal 的一个典型用例是当父组件有 `overflow: hidden` 或 `z-index` 样式时你需要其子组件能够在视觉上跳出其容器。例如，对话框、hovercards 以及提示框。

[链接-hacpai](https://hacpai.com/article/1552611002890)
# React Fragments 使用

Fragments 允许 React 组件在没有外层包裹的情况下返回多个元素，通过对子项进行分组而不是向 DOM 添加额外的元素。 Fragments 提供了更好的性能，更低的内存使用率，更清晰的 DOM 结构，并且可以帮助处理某些 CSS 机制（如：table，Flexbox 和 Grid）

```javascript
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

- 可以使用 `<></>` 代替 `<React.Fragment/>`，只是一个语法糖。
- `<></>` 语法不能接受键值或属性，如循环时需要加入 `key` 就只能使用 `<React.Fragment/>`

作者：Vanessa
链接：https://hacpai.com/article/1552361409524
来源：黑客派
协议：CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0/
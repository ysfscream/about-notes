# HTML contenteditable 属性

> contenteditable  是一个枚举属性，表示元素是否可被用户编辑。 如果可以，浏览器会修改元素的部件以允许编辑。

该属性必须是下面的值之一：

- true 或空字符串，表示元素是可编辑的；
- false 表示元素不是可编辑的。

这个属性可以利用 div 构建一个编辑文本的样式，并且可以添加一些属性，比如 input 的 textarea 不会根据文本自动改变高度，利用这个可以改善这个问题。

```html
<div class="editor" contenteditable="true"></div>
```

```css
div.editor {
  border: 1px solid black;
  min-height: 200px;
  padding: 10px;
}
```

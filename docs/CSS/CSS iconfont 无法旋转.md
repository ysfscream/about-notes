# CSS iconfont 无法旋转

> 其实只要是 transform 属性的内容运用在 iconfont 图标上都是无效的

解决：元素变成 inline-block 或 block 就行了

```css
.iconfont {
  display: inline-block;
  transform: rotate(180deg);
}
```

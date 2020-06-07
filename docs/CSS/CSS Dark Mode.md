# CSS Dark Mode

一行代码检测系统是否是暗黑模式

```javascript
window.matchMedia('(prefers-color-scheme: dark)').matches === true
```

简单的使用一行 CSS 代码实现暗黑模式的反转

```css
/* 如果添加另一个滤镜，我们可以将色相移回其初始值，因此仅亮度会发生变化： */

body.dark {
  filter: invert(100%) hue-rotate(180deg);
}
```

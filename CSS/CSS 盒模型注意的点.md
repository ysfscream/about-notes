# CSS 盒模型注意的点

CSS 盒子模型（Box Model）布局包含内容（content）、内边距（padding）、边框（border）、外边距（margin）四个部分。

- 标准盒模型：属性 width / height 只包含 content，不包含 border 和 padding
- IE 盒模型：属性 width / height 包含 content + padding + border
- IE6/7/8 中 DOCTYPE 缺失会触发 IE 盒模型，标准中可使用 box-sizing 属性进行控制：content-box | border-box | inherit
- JavaScript 如何设置和获取盒模型对应的宽和高
  element.style.width / height 只能取到行内样式的宽和高，style 标签中和 link 外链的样式无法获取
  window.getComputedStyle(element).width / height 获取元素的宽或高：content + padding + border + ‘px’
  dom.getBoundingClientRect().width / height 同上，但返回值为数字类型，不含 px
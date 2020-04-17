# CSS 修复 flex 布局 Overflow 问题

[https://moduscreate.com/blog/how-to-fix-overflow-issues-in-css-flex-layouts/](https://moduscreate.com/blog/how-to-fix-overflow-issues-in-css-flex-layouts/)

> 一个简单的flex列布局，需要在溢出时滚动。 在浏览器上溢出。 内容将只是扩展到其最大高度并展开布局，不能滚动到最底部

只需添加 `min-height：0` 到具有我们的溢出容器的 flex child

```html
<div class="main-container"> // flex-direction: column;
  <div class="fixed-container">Fixed Container</div> // height: 100px;
  <div class="content-wrapper"> // min-height: 0;
    <div class="overflow-container">
      <div class="overflow-content">
        Overflow Content
      </div>
    </div>
  </div>
</div>
```

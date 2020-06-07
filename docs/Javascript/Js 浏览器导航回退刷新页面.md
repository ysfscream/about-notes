# Js 浏览器导航回退刷新页面.md

浏览器自带后退按钮进行返回操作，浏览器返回操作默认读取缓存内容，而我们的需求是重新刷新页面，从服务器重新获取数据。一般使用了ajax进行异步刷新时会碰到这样的问题。

```html
<pre>
  <META HTTP-EQUIV="pragma" CONTENT="no-cache">
  <META HTTP-EQUIV="Cache-Control" CONTENT="no-cache, must-revalidate">
  <META HTTP-EQUIV="expires" CONTENT="0">
</pre>
```

```javascript
window.onload = function() {
  if (window.name !== 'hasload') {
    location.reload()
    window.name = 'hasload'
  } else {
    window.name = ''
  }
}
```

```javascript
// safari 适配
window.onpageshow = function(event) {
  if (event.persisted) {
    window.location.reload()
  }
};
```

# CSS MacOS Dark mode

> 前端页面探测 Mac OS 系统是否开启了 Dark Mode

```css
@media (prefers-color-scheme: dark) {
  body {
    background-color: #000;
    color: white;
  }
}

```javascript
window.matchMedia('(prefers-color-scheme: dark)').matches === true
```

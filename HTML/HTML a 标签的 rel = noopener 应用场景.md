# HTML a 标签的 rel = "noopener" 应用场景

`rel="noopener"` 是 `<a>` 超链接标签的一个属性。他可以禁止打开的新页面中使用 `window.opener` 属性，这样一来打开的新页面就不能通过 `window.opener` 去操作你的页面。因此应在打开新页面的场景下使用，否则就会导致严重的安全漏洞。如新页面可以通过 `window.opener.location = newURL` 将你的页面导航至任何网址。



当你的页面链接至使用` target="_blank" `的另一个页面时，新页面将与你的页面在同一个进程上运行。 如果新页面正在执行开销极大的 JavaScript 时，那么你的页面性能可能会受到影响。
如果使用 JavaScript 打开的页面，可以通过如下代码解决：

```js
var windowUrl = window.open('https://ysfscream.xyz');
windowUrl.opener = null;
```
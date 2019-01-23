# HTML script 标签中的 defer 和 async

脚本的下载和执行将会按照文档的先后顺序同步进行。当脚本下载和执行的时候，文档解析就会被阻塞，在脚本下载和执行完成之后文档才能往下继续进行解析。总之脚本的下载和执行都是按照文档的先后顺序进行。

## defer

`defer` 属性表示脚本按顺序被解析到时就开始下载，下载过程中文档继续进行解析，当文档全部解析完成之后便开始执行下载好的脚本，这相当于在 `DOMContentLoaded` 的监听事件内进行执行。虽然 `defer` 属性的脚本需要等到文档解析完才开始执行，但其执行是有顺序的。

## async

`async` 属性表示脚本按顺序被解析到时就开始下载，下载过程中文档继续进行解析，当下载完成后文档停止解析开始执行下载好的脚本，脚本执行完后继续解析文档。`async` 脚本由于网络等的影响将不会按照顺序执行。

![215179843659da4801c6772_articlexpng](https://img.hacpai.com/file/2018/12/215179843659da4801c6772_articlex-b75598d7.png)

注意：两个属性都必须在脚本中含有 `src` 属性时才能进行使用，内联脚本不可以使用。如下所示：

```html
<script src="myscript.js"></script>
<script src="myscript.js" defer></script>
<script src="myscript.js" async></script>
```

- 把带 `defer` 属性的脚本放在 `<head>` 中比无属性的脚本放在 `</body>` 之前要更好，因为浏览器在页面解析时可对带 `defer` 属性的脚本进行下载。
- 如果脚本相互依赖，请使用 `defer`。
- 如果脚本是独立的，请使用 `async`。
- 如果 DOM 必须解析好才执行且执行函数没有放在 `DOMContentLoaded` 的监听器中，请使用 `defer`。

作者：Vanessa

链接：https://hacpai.com/article/1545093175137

来源：黑客派

协议：CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0/
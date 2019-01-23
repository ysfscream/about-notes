# Js 创建文件并下载

- 将文件名和文件内容传入

- 创建 \<a> 标签，并添加 download 属性

  - download 属性规定被下载的超链接目标。

    在 \<a> 标签中必须设置 href 属性。

    该属性也可以设置一个值来规定下载文件的名称。所允许的值没有限制，浏览器将自动检测正确的文件扩展名并添加到文件 (.img, .pdf, .txt, .html, 等等)。(在 HTML5 中，download 属性是 \<a> 标签的新属性。)

- 将内容传入 [Blob](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob) 构造为一个 blob 对象（二进制大对象）

- 把内容用 [URL.createObjcetURL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL) 转换下载的内容为一个[dataURI](https://sjolzy.cn/What-is-the-data-URI-scheme-and-how-to-use-the-data-URI-scheme.html)加入到\<a>的 href 中提供下载

  - **URL.createObjectURL() **静态方法会创建一个 [`DOMString`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString)，其中包含一个表示参数中给出的对象的URL。这个 URL 的生命周期和创建它的窗口中的 [`document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document) 绑定。这个新的URL 对象表示指定的 [`File`](https://developer.mozilla.org/zh-CN/docs/Web/API/File) 对象或 [`Blob`](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob) 对象。

- 自动点击\<a>标签下载

- [revokeObjectURL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/revokeObjectURL) 静态方法用来释放一个之前通过调用 [`URL.createObjectURL()`](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL) 创建的已经存在的 URL 对象。当你结束使用某个 URL 对象时，应该通过调用这个方法来让浏览器知道不再需要保持这个文件的引用了。

```js
dowloadFile(fileName, content) {
      const aTag = document.createElement('a')
      const blob = new Blob([content])
      aTag.download = fileName
      aTag.href = URL.createObjectURL(blob)
      aTag.click()
      URL.revokeObjectURL(blob)
    },
```




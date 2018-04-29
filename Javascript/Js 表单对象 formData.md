# Js 表单对象 formData



> FormData对象用以将数据编译成键值对，以便用`[XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)`来发送数据。其主要用于发送表单数据，但亦可用于发送带键数据(keyed data)，而独立于表单使用。如果表单`enctype`属性设为multipart/form-data ，则会使用表单的[`submit()`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLFormElement/submit "HTMLFormElement.submit()用来提交表单，这个方法和提交表单按钮很类似。")方法来发送数据，从而，发送数据具有同样形式。



在目前使用中，用于上传文件，提交 input 中的选中的 file 文件

使用 append 方法：

```javascript
 const formData = new FormData()
 // 两种方式
 formData.append(name, value) 
 formData.append(name, value, fileName)
// 再将 formData 携带到 post 请求的 data 中，headers 设置为 'Content-Type': 'multipart/form-data'
```

`name`

字段名称. 类似表单内上传时 input 标签的 name 值

name 属性规定 input 元素的名称。

name 属性用于对提交到服务器后的表单数据进行标识，或者在客户端通过 JavaScript 引用表单数据。

注释：只有设置了 name 属性的表单元素才能在提交表单时传递它们的值。

`value`

字段值.可以是,或者一个字符串,如果全都不是,则该值会被自动转换成字符串. 相当于选中的文件的值。

`filename`

(可选) 指定文件的文件名,当`value`参数被指定为一个[`Blob`](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob "Blob 对象表示不可变的类似文件对象的原始数据。Blob表示不一定是JavaScript原生形式的数据。File 接口基于Blob，继承了 blob的功能并将其扩展使其支持用户系统上的文件。")对象或者一个[`File`](https://developer.mozilla.org/zh-CN/docs/Web/API/File "文件(File) 接口提供有关文件的信息，并允许网页中的 JavaScript 访问其内容。")对象时,该文件名会被发送到服务器上,对于[`Blob`](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob "Blob 对象表示不可变的类似文件对象的原始数据。Blob表示不一定是JavaScript原生形式的数据。File 接口基于Blob，继承了 blob的功能并将其扩展使其支持用户系统上的文件。")对象来说,这个值默认为"blob".



例子(包含前后端)：

koa:

```javascript
// koa 接口
router.post('/image', upload.single('image'), async (ctx, next) => {
  ctx.body = {
    filename: ctx.req.file.filename//返回文件名
  }
})
// 这里 upload.single('image') image 就是前端需要设置的 name 值
```

vue:

```html

<input ref="img" type="file" name="image" />
<button @click="postFile">
    upload
</button>
```

```javascript
postFile() {
  const url = `/e_api${this.url}`
  const headers = { 'Content-Type': 'multipart/form-data' }
  const data = this.$refs.img.files[0]
  const formData = new FormData()
  formData.append('image', data) // image 就为 后端所需的 name 值
  axios({
    headers,
    method: 'post',
    url,
    data: formData,
  }).then((response) => {
    console.log(response)
  })
},
```

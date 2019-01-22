# Vue 修改头像预览

```html
<v-btn
       color="blue"
       @click="$refs.img.click()"
       class="white--text">
  选择头像
  <v-icon right dark>insert_drive_file</v-icon>
</v-btn>
<form>
  <input style="display:none" id="img" ref="img" type="file" @change="readFile" />
</form>
```

将 input[type=file] 的display: none 隐藏后，设置点击时间后 获取到 refs 的点击事件，就可以调整按钮或其它的样式 不用修改它自身的样式

选择后设置 change 事件监听，选择文件后 获取到文件信息 File对象 再转换为 二进制大对象 然后通过 URL.createObjectURL

> URL.createObjectURL()方法会根据传入的参数创建一个指向该参数对象的URL. 这个URL的生命仅存在于它被创建的这个文档里. 新的对象URL指向执行的File对象或者是Blob对象.

然后赋值到这个img标签的src里 就可实现选择图片后，预览到图片的效果

```javascript
readFile() {
  this.isSelected = true
  const blob = new Blob([this.$refs.img.files[0]])
  const imgURL = URL.createObjectURL(blob)
  this.$emit('update:imgSrc', imgURL)
  URL.revokeObjectURL(blob)
},
```

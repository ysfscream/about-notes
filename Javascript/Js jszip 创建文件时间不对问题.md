# Js jszip 创建文件时间不对问题

Jszip 是一个经常用到的 js 前端创建文件后打包的库

打包后下载下来的文件的时间与系统时间会相差八个小时 解决方法：

```js
const zip = new JSZip()
const currDate = new Date();
const dateWithOffset = new Date(currDate.getTime() - currDate.getTimezoneOffset() * 60000);

zip.file('file name', 'file content', { binary: true, date: new Date(dateWithOffset) })
zip.file('file name', 'file content', { binary: true, date: new Date(dateWithOffset) })
```


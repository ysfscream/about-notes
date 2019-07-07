# Electron Ipc 间的通讯

> **渲染进程**使用 ipcRenderer.send 发送异步消息，然后使用 on 事件监控**主进程**的返回值。**主进程**使用on事件监听消息，使用 event.sender.send 返回数据。

渲染进程和主进程进行关联，使用的关键词就是：channel

```javascript
// index.html
const { ipcRenderer } = require('electron')
ipcRenderer.send('render-msg', 'toggleTheme', 'light')
ipcRenderer.on('main-reply', (event, arg) => {
     console.log(arg) // ok
})

// index.js
const { ipcMain } = require('electron')
ipcMain.on('render-msg', (event, ...args) => {
  console.log(args) // ['toggleTheme', 'light']
  event.sender.send('main-reply', 'ok')
})
```

一般情况都是 **渲染进程** 主动发起事件的。

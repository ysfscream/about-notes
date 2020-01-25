# Electron 快捷键

## Electron `global-shortcut` 模块

global-shortcut 模块可以便捷的为您设置(注册/注销)各种自定义操作的快捷键.

> 使用此模块注册的快捷键是系统全局的(微信截图那种), 不要在应用模块(app module)响应 ready 消息前使用此模块(注册快捷键)。

## 本地快捷键

您可以使用“菜单”模块配置键盘快捷键，只有在应用程序关注时才会触发键盘快捷键。为此，请 accelerator 在创建 MenuItem 时指定一个属性。

```javascript
const {Menu, MenuItem} = require('electron')
const menu = new Menu()

menu.append(new MenuItem({
  label: 'Print',
  accelerator: 'CmdOrCtrl+P',
  click: () => { console.log('time to print stuff') }
}))
```

## BrowserWindow中的快捷键

如果您想要处理BrowserWindow的键盘快捷键，则可以在渲染器进程内的窗口对象上使用keyup和keydown事件侦听器。

```javascript
window.addEventListener('keyup', doSomething, true)
```

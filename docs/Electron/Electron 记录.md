# Electron 记录

- 卡在了 node install.js 这一步

解决：
所以解决的方法就是在~/.npmrc里做如下设置，设置淘宝镜像源

`electron_mirror="https://npm.taobao.org/mirrors/electron/"`

- Electron 安全警告
从Electron 2.0版本开始，开发者将会在开发者控制台看到打印的警告和建议。 这些警告仅在可执行文件名为 Electron 时才会为开发者显示。

> 你可以通过在process.env 或 window对象上配置ELECTRON_ENABLE_SECURITY_WARNINGS 或ELECTRON_DISABLE_SECURITY_WARNINGS来强制开启或关闭这些警告。

清单：**安全建议**

为加强程序安全性，你至少应当遵循下列规则：

只加载安全的内容

禁止在所有渲染器中使用Node.js集成显示远程内容

做所有显示远程内容的渲染器中启用上下文隔离。

在所有加载远程内容的会话中使用 ses.setPermissionRequestHandler().
不要禁用 webSecurity

定义一个Content-Security-Policy并设置限制规则(如：script-src 'self')
不要设置 allowRunningInsecureContent 为 true.

不要开启实验性功能

不要使用enableBlinkFeatures
`<webview>`：不要使用 allowpopups
`<webview>`：验证选项与参数

禁用或限制网页跳转

禁用或限制新窗口创建

不要对不可信的内容使用 openExternal

Disable the remote module

Filter the remote module

- Unable to override app name on mac os electron menu

When you run your application in development environment using;

`./node_modules/.bin/electron main.js`
or

`electron main.js`

You are actually running a prebuilt electron executable that runs file specified by you. So in this case, the OS will display the name under which the application was built and packaged.

If you wish to change it, you need to package it. i.e. build your own distributable package. And to do this, there is an awesome package electron-builder

- 打开 `devtoole`

win下的快捷键是：`ctrl+shift+i`，mac下的快捷键是：`alt+command+i` 这两个快捷键和chrome的定义，是有所区别的。

[https://newsn.net/say/electron-devtools.html](https://newsn.net/say/electron-devtools.html)

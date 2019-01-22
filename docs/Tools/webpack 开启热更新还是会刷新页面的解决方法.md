# webpack 开启热更新还是会刷新页面的解决方法

开启 webpack-dev-server 后，更改会刷新整个页面，如果只开启热更新 `hotOnly`

警告提示

```js
The following modules couldn't be hot updated: (They would need a full reload!)
```

解决方法就是`accept`你的模块，让它能够进行热替换

只有被`accept`的代码才能进行热替换，所以`react`有`react-hot-loader`, `vue`有`vue-loader`，这些插件已经包含了热替换的相关代码。

模块的代码里加上

```js
if (module.hot) {
  module.hot.accept('模块文件路径' function() {
	// 处理函数
  });
}
```


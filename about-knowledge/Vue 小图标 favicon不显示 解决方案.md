# Vue 小图标 favicon不显示 解决方案



vue-cli 生成的模板中



直接将favico.ico丢到根目录(就是src同级的目录)，然后进行在build/webpack.dev.conf.js文件配置

```js
new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      favicon: './favicon.ico'  
    })
```



inde.html 中添加

```html
<link rel="shortcut icon" type="image/x-icon" href="./favicon.ico" /> 

```


# webpack 动态 require

## require.context

可以通过 require.context() 函数来创建自己的 context。

可以给这个函数传入三个参数：

- 一个要搜索的目录
- 一个标记表示是否还搜索其子目录
- 以及一个匹配文件的正则表达式。

```javascript
require.context(directory, useSubdirectories = false, regExp = /^\.\//);
```

例如 require 加载当前的 apps 下目录的所有 js 文件

```javascript
const context = require.context('./apps', false, /\.js$/)
console.log(context.keys()) // ["./router.js", "./store.js"]
const router = context('./router.js')
console.log(router.default) // router.js 文件导出的所有内容
```

https://webpack.docschina.org/guides/dependency-management/#%E5%B8%A6%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%9A%84-require-%E8%AF%AD%E5%8F%A5

https://www.jianshu.com/p/78f7b19932cb
# Js 立即执行函数

这种技术在 JavaScript 库中非常常见，他可以围绕文件中的上下文创建一个闭包环境，为这个文件创建私有的命名空间。这样就可以避免不同的 JavaScript 模块和库在命名上产生冲突。函数被立即调用，就可以将函数的返回值赋给命名空间（库名）。

```js
const myLibrary = (function() {
  var privateVariable = 2
  return {
    publicMethod: () => privateVariable
  }
})()
myLibrary.publicMethod() // 2
```

立即执行的匿名函数除了提供私有命名空间外，还提供了数据隐藏、封装、多实例等面向对象编程的特性
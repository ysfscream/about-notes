# Js 手动实现一个 bind

实现 `bind` 函数：以下代码执行时，需返回正确结果且运行过程中无异常

```js
let example = function () {
  console.log(this)
}
const boundExample = bind(example, { a: true })
boundExample.call({ b: true }) // {a: true}
```

bind 需接受两个参数：函数和上下文
bind 需创建一个新函数，并且在调用时设置上下文为 this

```js
const bind = (fn, context) => () => fn.apply(context)
```

作者：Vanessa
链接：https://hacpai.com/article/1546958569887
来源：黑客派
协议：CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0/
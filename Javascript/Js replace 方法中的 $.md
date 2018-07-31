# Js replace 方法中的 $

> **replace()** 方法返回一个由替换值替换一些或所有匹配的模式后的新字符串。模式可以是一个字符串或者一个[正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/RegExp), 替换值可以是一个字符串或者一个每次匹配都要调用的函数。

```js
str.replace(regexp|substr, newSubStr|function)
```



$n -> 假如第一个参数是 [`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/RegExp)对象，并且 n 是个小于100的非负整数，那么插入第 n 个括号匹配的字符串。

**每一个括号是一个分组 `$0` - `$9` 代表的分组**

```js
// 在匹配到的两个分组，替换后加入空格
"LoveYou".replace(/([a-z])([A-Z])/g, '$1 $2')
"Love You"
```


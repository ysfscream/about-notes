# Memoization 是什么

Memoization 是用来缓存函数调用的输出结果，以便减少后续再次调用时的运算，进而加快运算速度的一种优化技术。Memoization 在再次调用有相同输入的同一函数时将直接返回缓存的该函数的输出结果，但第一次的计算当然是必不可少的。

JavaScript 对此的一个基本实现如下：

```js
const memoize = fn => {
  const cache = new Map()
  return value => {
    const cachedResult = cache.get(value)
    if (cachedResult !== undefined) return cachedResult
    const result = fn(value)
    cache.set(value, result)
    return result
  }
}
```

函数为纯函数时，方才可以使用 Memoization。

作者：Vanessa
链接：https://hacpai.com/article/1550152136095
来源：黑客派
协议：CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0/
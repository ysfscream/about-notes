# Js 数组去重

## indexOf 方法

> `indexOf(searchValue[, fromIndex])`  方法可返回某个指定的字符串值在字符串中首次出现的位置。可用于` String.prototype.indexOf` 和 `Array.prototype.indexOf`
>
> 如果未找到该值，则返回-1

可以利用该特性 查找数组中是否含有该值，如果不存在（等于 -1） push 到新的数组中，如有的话，就返回不添加。

```js
const unique = (arr) => {
    const res = []
    arr.forEach((item) => {
        if (res.indexOf(item) === -1) {
			res.push(item)            
        }
    })
    return res
}
unique([1, 1, 1, 2, 2, 3]) // [1, 2, 3]
```



## Set

> 是一组key的集合，由于key不能重复，所以，在Set中，没有重复的key。

可以利用 Set 无重复的特性，进行数组去重

``` js
const unique = (arr) => [...new Set(arr)]
unique([1, 1, 1, 2, 2, 3]) // [1, 2, 3]

// 解释
new Set([1, 1, 1, 2, 2, 3]) // Set {1, 2, 3}
[...new Set([1, 1, 1, 2, 2, 3])] // 展开运算符可得 [1， 2，3]
```



## filter

```js
cinst arr = [1, 2, 2, 3]
arr.filter((item, index) => arr.indexOf(item) === index)
```



## reduce

```js
cinst arr = [1, 2, 2, 3]
arr.reduce((unique, item) => 
	unique.includes(item) ? unique : [...unique, item], [])
```


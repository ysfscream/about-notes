# Js 数组指定位置插入

可以利用 splice 来进行插入

> splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
>
> splice(索引位置index, 要删除元素的数量howmany, 元素item)

```js
const a = [1, 2, 3]

a.splice(1, 0, '1')

a // [1, '1', 2, 3]
```

将这个方法添加到数组原型(Array prototype)中

```js
Array.prototype.insert = function(index, item) {
    this.splice(index, 0, item)
}
a.insert(4, 8)
a // [1, '1', 2, 3, 8]
```


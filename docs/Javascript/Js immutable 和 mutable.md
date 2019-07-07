# Js immutable 和 mutable

## Immutable（不可变）

```javascript
var name = ‘Bill’;
var full_name = name.concat(‘ Gates’);

var sum = 2 + 3;
```

类似于 name  2 3 的这些值都是永远不会被改变的，类似于这些在 js 中就是 immutable

## Mutable（可变的）

```javascript
var arr = [1]
var new_arr = arr.push(2)


var foo = {a: {b: 1}}
// undefined
foo.a.b
// 1
var bar = foo
// undefined
bar.a.b
// 1
foo.a.b = 2
// 2
foo.a.b
// 2
bar.a.b
```

这个例子中 原数组发生了变化，`arr === [1, 2]`，或者是 bar 的值引用了 foo 的，类似于这样的，在 js 中就为 mutable

# Js 函数组合

https://github.com/mqyqingfeng/Blog/issues/45



**函数组合**就是组合两到多个函数来生成一个新函数的过程。将函数组合在一起，就像将一连串管道扣合在一起，让数据流过一样。 简而言之，函数 `f` 和 `g`的组合可以被定义为 `f(g(x))`，从内到外（从右到左）求值。也就是说，求值顺序是：

1. `x`
2. `g`
3. `f`

简单的实现

```js
// 输入 bt； 输出 HELLO BT
const toUpperCase = (str) => str.toUpperCase()
const hello = (str) => `HELLO ${str}`
const compose = (f, g) => {
	return (x) => {
		return f(g(x))
    }
}

const greet = compose(hello, toUpperCase)
greet('bt') // HELLO BT
```


可以写一个 compose 函数支持传入多个函数

接抄袭 underscore 的 compose 函数的实现：

**注意**: arguments 对象是所有（非箭头）函数中都可用的局部变量

```js
function compose() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
        var i = start;
        var result = args[start].apply(this, arguments);
        while (i--) result = args[i].call(this, result);
        return result;
    };
};
```



## pointfree

pointfree 指的是函数无须提及将要操作的数据是什么样的。依然是以最初的需求为例：

```js
// 需求：输入 'kevin'，返回 'HELLO, KEVIN'。

// 非 pointfree，因为提到了数据：name
var greet = function(name) {
    return ('hello ' + name).toUpperCase();
}

// pointfree
// 先定义基本运算，这些可以封装起来复用
var toUpperCase = function(x) { return x.toUpperCase(); };
var hello = function(x) { return 'HELLO, ' + x; };

var greet = compose(hello, toUpperCase);
greet('kevin');
```

而且你也会发现：

> Pointfree 的本质就是使用一些通用的函数，组合出各种复杂运算。上层运算不要直接操作数据，而是通过底层函数去处理。即不使用所要处理的值，只合成运算过程。

那么使用 pointfree 模式究竟有什么好处呢？

> pointfree 模式能够帮助我们减少不必要的命名，让代码保持简洁和通用，更符合语义，更容易复用，测试也变得轻而易举。
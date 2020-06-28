# 函数式编程

> [http://www.ruanyifeng.com/blog/2012/04/functional_programming.html]( http://www.ruanyifeng.com/blog/2012/04/functional_programming.html)
> [https://github.com/jasonGeng88/blog/blob/master/201705/functional_programming.md](https://github.com/jasonGeng88/blog/blob/master/201705/functional_programming.md)

## 定义

函数式编程是 [编程范式（面向过程，面向对象，函数式编程，多范式）](https://www.zhihu.com/question/20428688)的一种

**面向对象编程**是以数据为核心，对象则指的是类的实例。它将对象作为程序的基本单元，将程序和数据封装其中，可以看作一种在程序中包含各种独立而又互相调用的对象的思想。面向对象编程由于其有继承、封装、多态的特性，使得其具有高内聚低耦合、已扩展、成本低等优点。但是会造成数据的不确定性，在运行效率上也不如面向过程编程。

**函数式编程**是一种编程范型，面向过程的编程，它将电脑运算视为数学上的函数计算，并且避免使用程序状态以及易变对象。简单说，函数式编程所有的数据都是不可变的，所以安全性和稳定性上更盛一筹。函数式编程广泛运用于科学研究中，因为在科研中对于代码的工程化要求比较低，写起来更加简单。但是由于数据不可变在运行中一直存在，所以内存资源占用很大。同时由于先天性的设计，性能也不乐观。

**纯函数**：一个函数如果输入参数确定，输出结果唯一不变，那么该函数就是纯函数。它无状态，没有副作用也无关时序问题，所依赖的函数也不会被受影响。

```js
// 纯函数
const a = (x, y) => x + y
const b = (arr, value) => arr.concat(value)
const c = arr => [...arr].sort((a, b) => a - b)
const d = arr.slice(0, 3)

// 不是纯函数
const a = (x, y) => x + y + Math.random()
const b = (arr, value) => (arr.push(value), arr)
const c = arr => arr.sort((a, b) => a - b)
const d = arr.splice(0, 3) // arr 被修改
```

> It returns the same result if given the same arguments (it is also referred as deterministic)
> It does not cause any observable side effects

```js
const PI = 3.14;

function calculateArea(radius) {
  return radius * radius * PI;
}

calculateArea(10); // returns 314.0

// impure function: because it uses a global object that was not passed as a parameter to the function.
```

```js
const PI = 3.14;

function calculateArea(radius, pi) {
  return radius * radius * pi;
}

calculateArea(10, PI); // returns 314.0
// pure function: So now we are just accessing parameters passed to the function. No external object.
```

- 任何依赖随机数生成器的函数都不可能是纯函数

一个数学表达式：

```math
(1 + 1) * 3 - 4
```

过程式编程：

```js
var a = 1 + 1
var b = a * 3
var c = b - 4
```

函数式编程：

```js
var res = sub(mult(add(1, 1), 3))
```

## 特点

1.函数是‘’一等公民‘’：函数和其它数据类型一样，处于平等地位，可以赋值给其它变量，也可以作为参数传入另一个函数，或者作为别的函数的返回值

比如：

```js
var print = function (i) {
  console.log(i)
}
[1, 2, 3].forEach(print)
```

2.只用表达式，不用语句：表达式是一个运算的过程，总是有一个返回值，语句没有。函数式编程要求每一步都是单纯的运算，而且都有返回值。

3.没有副作用：函数内部不与外部互动（最典型，修改全局变量），意味着函数要保持独立，所有功能都是返回一个新的值，没有其他行为，不得修改外部变量的值

4.不修改状态：变量往往来保存状态，不修改变量，函数式使用参数保存状态。



5. 引用透明，指的是函数的运行不依赖外部变量或状态，只依赖输入的参数，任何时候只要参数相同，引用函数s所得到的返回值总是相等的

## 意义

- 代码简洁，开发快速（减少代码的重复）

- 接近自然语言，易于理解

  ```js
  merge([1,2],[3,4]).sort().search("2")
  ```

  ​

- 更方便的代码管理（每个函数都被看做独立的单元，利于 test 和 debug，模块化组合）

- 易于并发编程（函数间互不干扰，放心增加线程）

- 代码的热升级（函数式编程没有副作用，只要保证接口不变，内部实现是外部无关的。所以，可以在运行状态下直接升级代码，不需要重启，也不需要停机）

## 函数式编程的应用

- 高阶函数是一个函数以函数为参数，或以函数为返回值，或者既以函数为参数又以函数为返回值。

- 偏函数是通过指定部分参数来产生一个新定制的函数，如：

```js
const isType = function (type) {
 return function (obj) {
    return toString.call(obj) == '[object' + type + ']';
 };
};
const isString = isType('string');
```

- 柯里化是将一个多参数函数转换成多个单参数函数

```js
function addX(y) {
 return  function (x) {
    return x + y;
 };
}
addX(2)(1) // 3
```

- 函数复合是结合两个或多个函数，从而产生一个新的函数以简化中间步骤

```js
const add = (a, b) => a + b;
const mult = (a, b) => a * b;
add(2, mult(3, 5)) // 17
```

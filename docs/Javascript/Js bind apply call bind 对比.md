# Js bind apply call bind 对比

[参考](http://web.jobbole.com/83642/)

- `apply `  `call `   `bind `  三者都是用来改变函数的 this 的指向的
- `apply `  `call `   `bind `  三者的第一个参数都是 this 要指向的对象，也就是想指定的上下文
- `apply `  `call `   `bind `  三者都可以利用后续参数传入参数
- `bind` 是返回对应函数，便于稍后调用；`apply` 、`call `则是立即调用

## bind

> MDN的解释是：bind()方法会创建一个新函数，称为绑定函数，当调用这个绑定函数时，绑定函数会以创建它时传入 bind()方法的第一个参数作为 this，传入 bind() 方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。

用 bind() 简单的调用函数或者方法被调用时绑定 this 到指定的对象上，返回的是对应的函数

```js
var obj = {
    birth: 1990,
    getAge: function() {
        var b = this.birth //1990
        var fn = function () {
            console.log(this)
            return new Date().getFullYear() - this.birth
            //this指向obj
        }
        console.log(fn.bind(obj)()) // {birth: 1990, getAge: ƒ}
    }
}

obj.getAge()
```

### Bind 方法允许我们柯里化一个函数

> 柯里化的概念很简单, 只传递给函数一部分参数来调用它, 让它返回一个函数去处理剩下的参数. 你可以一次性地调用 curry 函数, 也可以每次只传一个参数分多次调用, 以下为一个简单的示例. - [JS 函数是编程指南 第 4 章: 柯里化（curry）](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch4.html)

```js
var add = function(x) {
  return function(y) {
    return x + y;
  };
};

var increment = add(1);
var addTen = add(10);

increment(2);
// 3

addTen(2);
// 12
```

现在, 我们使用 bind() 方法来实现函数的柯里化. 我们首先定义一个接收三个参数的 greet() 函数:

```js
function greet(gender, age, name) {
    // if a male, use Mr., else use Ms.
    var salutation = gender === "male" ? "Mr. " : "Ms. ";

    if (age > 25) {
        return "Hello, " + salutation + name + ".";
    }
    else {
        return "Hey, " + name + ".";
    }
}

```

接着我们使用 bind() 方法柯里化 greet() 方法. bind() 接收的第一个参数指定了 this 的值:

```js
 // 在 greet 函数中我们可以传递 null, 因为函数中并未使用到 this 关键字
var greetAnAdultMale = greet.bind (null, "male", 45);

greetAnAdultMale("John Hartlove"); // "Hello, Mr. John Hartlove."

var greetAYoungster = greet.bind(null, "", 16);
greetAYoungster("Alex"); // "Hey, Alex."
greetAYoungster("Emma Waterloo"); // "Hey, Emma Waterloo." 
```

## apply 和 call

> 作为 JavaScript 中最常用的两个函数方法, apply 和 call 允许我们借用函数以及在函数调用中指定 this 指向. 除此外, apply 函数允许我们在执行函数时传入一个参数数组, 以此使函数在执行可变参数的函数时可以将每个参数单独的传入函数并得到处理.

### call

```js
var obj = {
    birth: 1990,
    getAge: function() {
        var b = this.birth //1990
        var fn = function () {
            console.log(this)
            return new Date().getFullYear() - this.birth
            //this指向obj
        }
        console.log(fn.call(obj)) // {birth: 1990, getAge: ƒ}
    }
}

obj.getAge()
```

### apply

```js
var obj = {
    birth: 1990,
    getAge: function() {
        var b = this.birth //1990
        var fn = function () {
            console.log(this)
            return new Date().getFullYear() - this.birth
            //this指向obj
        }
        console.log(fn.apply(obj)) // {birth: 1990, getAge: ƒ}
    }
}

obj.getAge()
```

对于 apply、call 二者而言，作用完全一样，只是接受参数的方式不太一样

call 将参数挨个传入，apply 将参数作为一个数组传入

### Math.max 传入很多参数求最大值得方法中

call ：

```js
var arr = [1, 2, 3]

Math.max.call(Math, 1, 6, 3, 4) // 将 this 绑定到 Math 对象 输出 6
```

apply ：

```js
var arr = [1, 6, 3, 4]

Math.max.apply(Math, arr) // 将 this 绑定到 Math 对象 输出 6
```

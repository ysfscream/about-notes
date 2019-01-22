#JS 关于this和函数调用模式

## this

http://www.ruanyifeng.com/blog/2018/06/javascript-this.html

学懂 JavaScript 语言，一个标志就是理解下面两种写法，可能有不一样的结果。

> ```js
> var obj = {
>   foo: function () {}
> };
> 
> var foo = obj.foo;
> 
> // 写法一
> obj.foo()
> 
> // 写法二
> foo()
> ```

```js
var obj = {
  foo: function () { console.log(this.bar) },
  bar: 1
};

var foo = obj.foo;
var bar = 2;

obj.foo() // 1
foo() // 2
```

`this`指的是函数运行时所在的环境。对于`obj.foo()`来说，`foo`运行在`obj`环境，所以`this`指向`obj`；对于`foo()`来说，`foo`运行在全局环境，所以`this`指向全局环境。所以，两者的运行结果不一样。

将一个对象赋值给变量`obj`。JavaScript 引擎会先在内存里面，生成一个对象`{ foo: 5 }`，然后把这个对象的内存地址赋值给变量`obj`。也就是说，变量`obj`是一个地址（reference）。后面如果要读取`obj.foo`，引擎先从`obj`拿到内存地址，然后再从该地址读出原始的对象，返回它的`foo`属性。

 ![img](https://www.wangbase.com/blogimg/asset/201806/bg2018061802.png)



引擎会将函数单独保存在内存中，然后再将函数的地址赋值给`foo`属性的`value`属性。

![img](https://www.wangbase.com/blogimg/asset/201806/bg2018061803.png)

由于函数是一个单独的值，所以它可以在不同的环境（上下文）执行。

> 由于函数可以在不同的运行环境执行，所以需要有一种机制，能够在函数体内部获得当前的运行环境（context）。所以，`this`就出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境。

函数`f`在全局环境执行，`this.x`指向全局环境的`x`。

![img](https://www.wangbase.com/blogimg/asset/201806/bg2018061804.png)

在`obj`环境执行，`this.x`指向`obj.x`。

![img](https://www.wangbase.com/blogimg/asset/201806/bg2018061805.png)

回到本文开头提出的问题，`obj.foo()`是通过`obj`找到`foo`，所以就是在`obj`环境执行。一旦`var foo = obj.foo`，变量`foo`就直接指向函数本身，所以`foo()`就变成在全局环境执行。

## 方法调用模式



> 调用一个函数会暂停当前函数的执行 传递控制权和参数给新函数，除了声明定义的形参，还有两个参数：`this` 和 `arguments`



当一个函数被保存为对象的一个属性的时候，称做一个方法，当一个方法被调用的时候，this 被绑定到该方法所属的对象上 通过 this . 点 可以调用该对象的所有属性和方法

```js
var obj = {
	birth: 1990,
	getAge: function() {
		var b = this.birth //1990
	}
}

```



## 函数调用模式

当一个函数并非一个对象的属性时，它就被当做一个函数来调用，此模式调用函数时，this 被绑定到全局对象 即 window

### 一般函数

```js
var obj = {
	birth: 1990,
	getAge: function() {
		var b = this.birth //1990
		var fn = function () {
			return new Date().getFullYear() - this.birth 
			//this指向window或undefined
		}
		return fn()
	}
}

```

箭头函数很好的解决了这个问题，this 向上级作用域找

### 箭头函数

```js
var obj = {
	birth: 1990,
	getAge: function() {
		var fn = () => {
			return new Date().getFullYear() - this.birth 
			//this指向obj对象 1990
		}
		return fn()
	}
}
```
>箭头函数中this总是指向词法作用域  
>词法作用域就是一个变量的作用在定义的时候就已经被定义好，当在本作用域中找不到变量，就会一直向父作用域中查找，直到找到为止。



## 构造器调用模式

在一个函数前面带上 `new` 关键字来调用，那么背地里就会将会创建一个连接到该函数的 prototype 成员的新对象，同时 this 会被绑定到那个新对象上

```js
var Qua = function(string) {
  this.status = string // 这里 this 指向 new 后创建新对象， status 为对象的属性
}

//给 Qua 的所有实例提供一个方法
Qua.prorotype.getStatus = function() {
  return this.status // 这里 this 指向 new 后创建新对象， status 为对象的属性 该函数为对象的方法
}

var myQua = new Qua('😯👌')

console.log(myQua.getStatus()) // 😯👌

```

结合 new 前缀来调用的 被称作构造器函数，约定保存在首字母大写的变量里

不推荐这种形式的构造器函数

替换方法：



## Apply 调用模式

JavaScript函数时一种特殊的对象，所以函数也是对象既可以调用方法，比如调用 Apply 方法，一种特殊的调用方式，接受两个参数：一个是该函数 this 要绑定的对象，第二个是参数数组

```js
var add = function(a, b) {
	return a + b
}
var arr = [1, 2]
var sum = add.apply(null, arr)
console.log(sum) // 3
```
函数被调用时，会得到另一个免费的参数，arguments数组，但是并不是一个真正的数组，是一个类数组，可以调用 length 但是不能使用数组的任何方法，用来存储传入的参数，设定的形参，或多余加入的。

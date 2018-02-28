#JS 关于this和函数调用模式

> 调用一个函数会暂停当前函数的执行 传递控制权和参数给新函数，除了声明定义的形参，还有两个参数：`this` 和 `arguments`

## 方法调用模式

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

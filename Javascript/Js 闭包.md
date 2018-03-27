# JS闭包

>闭包就是能够外部访问函数内部的函数，本质上闭包就是连接函数内部和函数外部的桥梁

### 变量的作用域

* JavaScript语言的特殊之处 在于函数可以直接访问全局变量 函数外部无法调用内部变量

```js
var x = 999
function foo () {
	console.log(x)
}
foo() //999

function foo () {
	var x = 999
}
console.log(x) //error
```

### 闭包

* 通过函数内部返回函数 来访问函数的内部变量


```js
function foo() {
	var x = 999
	function bar() {
		console.log(x)
	}
	return bar
}
var result = foo()
result() //999

```
**代码中的bar就是一个闭包**

### 利用闭包创建一个计数器（可以封装一个私有变量）

```js
function count(num) {
	var x = num || 0
	reutrn {
		inc: function() {
			x += 1
			return x
		}
	}
} || function count(init){
  var x = init || 0
  return function inc() {
    x += 1
    return x
  }
}

var c1 = count()
c1.inc() //1
c1.inc() //2
c1.inc() //3

var c1 = count(10)
c1.inc() //11
c1.inc() //12
c1.inc() //13
```



















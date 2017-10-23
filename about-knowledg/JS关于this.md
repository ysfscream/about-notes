##JS关于this

###一般函数
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

###箭头函数
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
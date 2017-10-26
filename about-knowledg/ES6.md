# ES6模板语法
```js
`${var}是一个变量` === var + '是一个变量'
```
* * *

# 箭头函数
```js
const inputArr = [1, 2, 3]

input.map(number => number + 1)
//等价于
input.map(function(number){
	return number + 1
})
```
箭头函数后面带 {} 里面要写 **return返回值**  
没有写 {} 的 x => x 默认有 **return x 返回值**
>箭头函数里的this指向外部的对象，不指向自己本身

# class定义类

```js
class Student {
	constructor(name) {
		this.name = name
	}
	hello() {
        alert('Hello, ' + this.name + '!');
    }
}

//继承

class PrimaryStudent extends Student {
	constructor(name, grade) {
		super(name) //利用super调用父类的构造函数
		this.grade = grade
	}
	getGrade() {
		return this.grade
	}
}
```
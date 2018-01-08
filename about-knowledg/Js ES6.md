> [ES6全面介绍](http://es6.ruanyifeng.com/) 

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

# 展开运算符

用于函数调用

```JS
myFunction(...iterableObj);
```

用于数组字面量

```JS
const [...iterableObj] = [1, 3, 5, 7, 9];


[...iterableObj, 0, 2, 4, 6, 8];
// [1, 3, 5, 7, 9, 0, 2, 4, 6, 8]

[0, 2, ...iterableObj, 4, 6, 8];
// [0, 2, 1, 3, 5, 7, 9, 4, 6, 8]

[...iterableObj, 0, 2, 4, 5, 6, 8, ...iterableObj];
// [1, 3, 5, 7, 9, 0, 2, 4, 5, 6, 8, 1, 3, 5, 7, 9]
```

在需要使用数组作为函数的参数的情况下,通常使用 Function.prototype.apply 方法

```JS
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction.apply(null, args);
```

如果使用了ES6的展开运算符,你可以这么写

```JS
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);

function myFunction(v, w, x, y, z) { }
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```
  如果已经有一个数组，此时还需要再新建一个数组，要求新数组包含已有数组的数组项的话，就要用到push，splice，concat 等数组方法。有了扩展运算符会让代码更简洁:
  
```JS
let parts = ['shoulder', 'knees'];

let Tshirts = ['Lee', 'Nike'];


let lyrics = ['head', ...parts, 'and', 'toes'];

// ["head", "shoulder", "knees", "and", "toes"]



let lyrics = ['head', ...parts, 'and', 'toes', ...Tshirts];

// ["head", "shoulder", "knees", "and", "toes", "Lee", "Nike"]

```


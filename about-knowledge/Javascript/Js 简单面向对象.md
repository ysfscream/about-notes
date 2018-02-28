## Js 简单面向对象

> javaScript所有的数据都可以看做是对象, 对象是属性的容器，其中没有类和实例的概念， 是通过`prototype`（原型链）来实现面向对象的编程的 所有的对象都是为 `true`

> javaScript的数据类型有 `Array String Number Boolean Object Null undefined` 当使用 `typeof` 时 `null [] Array` 返回的都是Object 有数字 字符串 布尔值 null undefined 其它的都为对象 

### Js的对象

对象通过引用来传递 它们永远不会被复制

```js

var Student = {
	name: 'xiaoming',
	age: '18',
	study: function() {
		console.log(this.name + 'study hard!')
	}
}

// Student有属性和方法

```

### Js创建对象的方法

* 构造函数

```js
//创建构造函数
function Student(name) {
	this.name = name
	this.hello = function() {
		console.log(this.name + 'say xxx !')
	}
}

//通过new来创建对象
var xiaoming = new Student('小明')
xiaoming.name //'小明'
xiaoming.hello() //小明say xxx ！
var xiaohong = new Student('小红')
xiaohong.name //'小红'
xiaohong.hello() //小红say xxx ！

//xiaoming 和 xiaohong 的 name 和 hello 都是不同的
```
用`new`的话函数就变成了构造函数 `this`指向新建的对象 默认返回`this` 如果不使用的话 就是一个普通的函数 它返回`undefined` 

新建的xiaoming的原型链

```js

xiaoming ---> student.prototype ---> Obeject.prototype ---> null


```
用 `new Student()` 时还从对象上获得了一个`construct`属性 它指向`Student`本身

```js
//创建构造函数
function Student(name) {
	this.name = name
}

Student.prototype.hello = function() {
	console.log(this.name + 'say xxx !')
}

//通过原型链来创建一个共享函数 无论实例化什么对象 都可以共享调用hello这个函数
```

### 使用create函数

> 可以使用create函数来封装 所有的new操作

```js
function Student(props) {
	this.name = props.name || 'NULL'
	this.age = props.age || 1
}
Student.prototype.hello() = function(){
	console.log(this.name + 'say xxx !')
}

function createStudent(value) {
	return new Student(value || {})
}

var xiaoming = createStudent({
	name: '小明'
})
xiaoming.name // '小明'
xiaoming.age // 1 默认
```











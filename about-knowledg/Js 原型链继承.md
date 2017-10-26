## Js 原型链继承

* 基于`Student`扩展出`PrimaryStudent`

```js
//实现关系如
new PrimariyStudent() ---> PrimaryStudent.prototype ---> Student.prototype ---> Obeject.prototype ---> null

// 新创建的PrimariyStudent对象不仅可以调用PrimaryStudent的方法 也能调用Student的方法
```

**新建一个空函数F() 将其封装到inherits()**

```js
function inherits(father, child) {
	var F = function() {}
	
	//将F的原型指向父类原型
	F.prototype = father.prototype
	
	//把子类的原型指向一个新的F对象 F对象原型刚好指向father.prototype
	child.prototype = new F()
	
	//把子类的原型构造函数修复为child
	child.prototype.constructor = child
}

function Student(props) {
	this.name = props.name || ''
}

Student.prototype.hello = function() {
	console.log('hello!'+this.name)
}

function PrimaryStudent(props) {
	//调用Student构造函数 绑定this变量
	Student.call(this, props)
	this.grade = props.grade || 1
}

inherits(Student, PrimaryStudent) //实现继承

PrimaryStudent.prototype.getGrade = function() {
	return this.grade
} 

```

 **JavaScript的原型继承实现方式就是：**

1. 定义新的构造函数，并在内部用call()调用希望“继承”的构造函数，并绑定this；

2. 借助中间函数F实现原型链继承，最好通过封装的inherits函数完成；

3. 继续在新的构造函数的原型上定义新方法。



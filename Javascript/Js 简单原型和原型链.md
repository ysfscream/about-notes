# JS 简单原型和原型链

> 啥是原型，啥是原型链？
> 原型：一个属性，属性名叫prototype，只有构造函数有，比如Foo.prototype;
> 原型链：一个属性，属性名叫__ proto ____，万物皆有，链状相连，最后归宗到Object.prototype上，Object.prototype __ __ proto __值为null；

> js对每个创建的对象都会设置一个原型，指向它的原型对象

当我们用`obj.xxx`访问某个属性的值时 现在当前对象上查找该属性 如果没有找到 就在其原型对象上找 如果还没有就上溯到`Obeject.prototype`对象上找 最后没有返回undefined

### 例如 创建一个 Array || Function 对象

```js
var arr = [1, 2, 3]
//原型链为

arr ---> Array.prototype --->Object.prototype ---> null
```
`Array.prototype` 定义了 `indexOf()` `shift()` 等方法 因此可以在任何的 `Array` 对象上直接调用这些方法

```js
function foo () {
	return 0;
}
//原型链为

foo ---> Function.prototype --->Object.prototype ---> null
```
`Function.prototype` 定义了 `apply()` `call()` 等方法 因此可以在任何的 `Function` 对象上直接调用这些方法

**如果一个对象的原型链很长 那么访问一个对象的属性就会变得很慢 因此不能把原型链弄很长**



给所有的函数 function 添加一个公有的方法, 在当前对象调用该方法时，可直接使用，当类库中没有时就可以执行

```js
Function.prototype.method = function(name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func
  }
}
```

比如字符串移除收尾的空格：

```js
String.method('trim', function() {
  return this.replace(/^\s+|\s+$g, '')
})
' STRING '.trim() // 'STRING'
```



- 每个构造函数都有一个原型，这个原型的constructor属性就是这个构造函数。

```js
    function Foo(){this.name='我是构造函数Foo'} //一个构造函数Foo
    
    console.log(Foo.prototype); //打印结果可以看到一个Object对象，即Foo的原型，里面有一个constructor属性，属性值即为Foo函数。
    
    var foo = new Foo(); //实例化
    
    console.log(foo.constructor); //foo中没有constructor属性，沿着原型链找到Foo的原型(即上面打印的结果)，得到Foo原型的constructor属性值，即Foo函数。
```

以上代码解释了为什么通过查看实例的constructor属性可以得到实例的构造函数。重点在于“沿着原型链找”。

### js实现new运算符过程来剖析

先了解一下 **构造函数 constructor**， 是用于创建和初始化类中创建的一个对象的一种特殊方法。

```js
constructor([arguments]) { ... }

// 在 ES6 中构造函数的作用
class Polygon {
    constructor() {
        this.name = "Polygon";
    }
}
```

```js
// 构造函数 定义其 prototype
function Foo(name) {
	this.name = name
}
Foo.prototype = {
    constructor: Foo,//由于重新定义了prototype，咱们把constructor属性补上。
    say() {
        console.log('hello' + this.name)
    }
}
// 实现 new 方法
function generate(Fun, arguments) {
	var foo = {}//新建一个空对象
    foo.__proto__ = Fun.prototype//把foo的__proto__属性指向Fun.prototype。
    Fun.apply(foo, arguments)//利用apply改变this指向，现在运行Fun时，内部this指向foo空对象，那么给this.name赋值就变成了给foo.name赋值。
    return foo
}
// 实例化
var foo = generate(Foo, ['ysf'])
foo.name // ysf
foo.say() // helloysf
console.log(foo.prototype) // [Function: Foo]
```

new 就是以上方法的语法糖，还有解释了 构造函数中的this为什么就是指向实例化后的对象了

![](/media/about-blog/media/proto.png)

```
图中表示，f1由new Foo而来，而f1的__proto__连接着Foo.prototype，
这说明Foo的实例f1的__proto__(原型链)是指向Foo.prototype(原型)的，
你再回头去看我们用JS实现new所封装的方法generate，有这么一句：
foo.__proto__ = Fun.prototype;
那不就是手动把foo(图中的f1)的原型链指向Fun(图中的Foo)的原型吗！
```


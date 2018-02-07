## JS 简单原型

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


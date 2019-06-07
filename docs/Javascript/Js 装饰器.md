# Js 装饰器

> ES7 中的 decorator 同样借鉴了 python 装饰器的语法糖，不过依赖于 ES5 的 Object.defineProperty 方法 。
> Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。

## 用法

类的装饰器

```javascript
function addAtack(target) {
  target.atk += 10
}

@addAtack
class IronMan {
  constructor(atk = 2){
    this.atk = atk
  }
}

const tony = new IronMan()

tony.atk = 12
```

上面代码中，@addAtack 就是一个装饰器。它修改了 IronMan 个类的属性，为它为静态属性 atk 加上了 10 的值。addAtack 函数的参数 target 是 IronMan 类本身。

基本上，装饰器的行为就是下面这样。

```javascript
@decorator
class A {}

// 等同于

class A {}
A = decorator(A) || A;
```

**装饰器是一个对类进行处理的函数。装饰器函数的第一个参数，就是所要装饰的目标类**。

还可以为装饰器在封装一层函数，添加自定义参数

```javascript
function addAtack(atk) {
  return function(target) {
    target.atk = atk
  }
}

@addAtack(20)
class IronMan {
  constructor(atk = 2){
    this.atk = atk
  }
}

const tony = new IronMan()

tony.atk = 22
```

**装饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。这意味着，装饰器能在编译阶段运行代码。也就是说，装饰器本质就是编译时执行的函数**。

## 方法的装饰

装饰器不仅可以装饰类，还可以装饰类的属性。

```javascript
class IronMan {
  // IronMan 的战衣型号只读
  @readonly
  model() { return `${this.first} ${this.last}` }
}

function readonly(target, name, descriptor){
  // descriptor对象原来的值如下
  // {
  //    value: specifiedFunction,
  //    该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
  //   enumerable: false,
  //   enumerable定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。
  //   configurable: true,
  //   当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
  //   writable: true,
  //   当且仅当该属性的 writable 为 true 时，value 才能被赋值运算符改变。默认为 false。
  // };
  descriptor.writable = false;
  return descriptor;
}

readonly(Person.prototype, 'model', descriptor);
// 类似于
Object.defineProperty(Person.prototype, 'model', descriptor);
```

[core-decorators.js](https://github.com/jayphelps/core-decorators)是一个第三方模块，提供了几个常见的装饰器，通过它可以更好地理解装饰器。

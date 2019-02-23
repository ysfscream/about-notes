# Js 静态和是实例方法

- 静态方法属于一个类，他不能在实例上使用。

- 实例方法属于类的原型，他继承自该类的所有实例并可以在实例上使用。

```javascript
Array.isArray // 数组的静态方法
Array.prototype.push // 数组的实例方法
```

```javascript
class Foo {
  bar() {
      console.log('instance method')
  }

  static baz() {
      console.log('static method')
  }
}
Foo.baz() // static method
const f = new Foo()
f.bar() // instance method
```
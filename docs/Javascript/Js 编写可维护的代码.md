# Js 编写可维护的代码

[链接](https://juejin.im/post/5c24b7a851882509a76875e8)

- 函数返回一个布尔值

  can, has, is

- 函数返回一个非布尔值

  get

- 函数用来保存一个值

  set

构造函数 - > 首字母大写

## 使用 null

- 用来初始化一个变量，这个变量可能赋值为一个对象
- 用来和一个已经初始化的变量比较，这个变量可以是也可以不是一个对象
- 当函数的参数期望是对象是，参数传入
- 当函数的返回值期望是对象时，返回值传出

不使用 null

- 不要使用 null 来检测是否传入了某个参数
- 不要使用 null 来检测一个未初始化的变量

## 注释

注释上一行空行，对其语句， // 后面加一个空格

方法的文档注释可以

```js
/**
@method merge
@params {object}
@return {object}
**/
```

## 使用默认值

```js
function createMicrobrewery(name = 'Hipster Brew Co.') {
  // ...
}
```

## 参数越少越好

如果参数超过两个，使用 ES2015/ES6 的解构语法，不用考虑参数的顺序。

```js
function createMenu({ title, body, buttonText, cancellable }) {
  // ...
}

createMenu({
  title: 'Foo',
  body: 'Bar',
  buttonText: 'Baz',
  cancellable: true
});
```

## 函数只做一件事情

这是一条在软件工程领域流传久远的规则。严格遵守这条规则会让你的代码可读性更好，也更容易重构。如果违反这个规则，那么代码会很难被测试或者重用。

## 只需要一层抽象层

如果函数嵌套过多会导致很难复用以及测试。

## 不要传 flag 参数

通过 flag 的 true 或 false，来判断执行逻辑，违反了一个函数干一件事的原则。

## 避免副作用（第一部分）

函数接收一个值返回一个新值，除此之外的行为我们都称之为副作用，比如修改全局变量、对文件进行 IO 操作等。

当函数确实需要副作用时，比如对文件进行 IO 操作时，请不要用多个函数/类进行文件操作，有且仅用一个函数/类来处理。也就是说副作用需要在唯一的地方处理。

副作用的三大天坑：随意修改可变数据类型、随意分享没有数据结构的状态、没有在统一地方处理副作用。

## 不要写全局方法

在 JavaScript 中，永远不要污染全局，会在生产环境中产生难以预料的 bug。举个例子，比如你在 Array.prototype 上新增一个 diff 方法来判断两个数组的不同。而你同事也打算做类似的事情，不过他的 diff 方法是用来判断两个数组首位元素的不同。很明显你们方法会产生冲突，遇到这类问题我们可以用 ES2015/ES6 的语法来对 Array 进行扩展。

```js
class SuperArray extends Array {
  diff(comparisonArray) {
    const hash = new Set(comparisonArray);
    return this.filter(elem => !hash.has(elem));
  }
}
```

## 封装条件语句

避免多处使用 if

```js
function shouldShowSpinner(fsm, listNode) {
  return fsm.state === 'fetching' && isEmpty(listNode);
}

if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
  // ...
}
```

## 尽量别用“非”条件句

```js
function isDOMNodePresent(node) {
  // ...
}

if (isDOMNodePresent(node)) {
  // ...
}
```

## 避免使用条件语句

为了让代码更简洁易读，如果你的函数中出现了条件判断，那么说明你的函数不止干了一件事情，违反了函数单一原则。

## 删除弃用代码

很多时候有些代码已经没有用了，但担心以后会用，舍不得删。

如果你忘了这件事，这些代码就永远存在那里了。

放心删吧，你可以在代码库历史版本中找他它。

## 用 get、set 方法操作数据

这样做可以带来很多好处，比如在操作数据时打日志，方便跟踪错误；在 set 的时候很容易对数据进行校验...

```js
function makeBankAccount() {
  // 私有变量
  let balance = 0;

  function getBalance() {
    return balance;
  }

  function setBalance(amount) {
    // ... 在更新 balance 前，对 amount 进行校验
    balance = amount;
  }

  return {
    // ...
    getBalance,
    setBalance,
  };
}

const account = makeBankAccount();
account.setBalance(100);
```

可以用闭包来创建私有变量。

```js
function makeEmployee(name) {
  return {
    getName() {
      return name;
    },
  };
}
```

## 链式调用

这种模式相当有用，可以在很多库中发现它的身影，比如 jQuery、Lodash 等。它让你的代码简洁优雅。实现起来也非常简单，在类的方法最后返回 this 可以了。

```js
class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  setMake(make) {
    this.make = make;
    return this;
  }

  setModel(model) {
    this.model = model;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  save() {
    console.log(this.make, this.model, this.color);
    return this;
  }
}

const car = new Car('Ford','F-150','red')
  .setColor('pink');
  .save();
```

## 把 Switch 替换为 Object 字面量

好处是：

- don't have to worry about case or break
- easier to read and quickly understand what's happening
- object literals are easy enough to write
less code

```javascript
// Switch
let createType = null;
switch (contentType) {
  case "post":
    createType = () => console.log("creating a post...");
    break;
  case "video":
    createType = () => console.log("creating a video...");
    break;
  default:
    createType = () => console.log('unrecognized content type');
}
createType();

// Object literal
const contentTypes = {
  post: () => console.log("creating a post..."),
  video: () => console.log("creatinga  video..."),
  default: () => console.log('unrecognized content type')
};

const createType = contentTypes[contentType] || contentTypes['default'];
createType();
```

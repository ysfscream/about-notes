# Js 事件循环（Event loop）

https://juejin.im/post/5b24b116e51d4558a65fdb70

https://juejin.im/post/5a5d64fbf265da3e243b831f

JavaScript 是一门单线程语言，当遇到异步任务(如ajax操作等)时，不可能一直等待异步完成，再继续往下执行，在这期间浏览器是空闲状态，显而易见这会导致巨大的资源浪费。

## 执行栈

当执行某个函数、用户点击一次鼠标，Ajax完成，一个图片加载完成等事件发生时，只要指定过回调函数，这些事件发生时就会进入执行栈队列中，等待主线程读取,遵循先进先出原则。

## 主线程

主线程和执行栈不同，主线程规定现在执行 执行栈中的哪个事件。

主线程循环：即主线程会不停的从执行栈中读取事件，会执行完所有栈中的同步代码。

 ## 任务队列

当遇到一个异步事件后，并不会一直等待异步事件返回结果，而是将这个事件挂在于执行栈不同的队列中，称为任务队列（Task Queue）

当主线程执行完执行栈中的代码后，主线程就去查看任务队列里是否有任务，有的话，主线程会依次执行任务队列中的回调函数。

```js
let a = () => {
  setTimeout(() => {
    console.log('任务队列函数1')
  }, 0)
  for (let i = 0; i < 5000; i++) {
    console.log('a的for循环')
  }
  console.log('a事件执行完')
}
let b = () => {
  setTimeout(() => {
    console.log('任务队列函数2')
  }, 0)
  for (let i = 0; i < 5000; i++) {
    console.log('b的for循环')
  }
  console.log('b事件执行完')
}
let c = () => {
  setTimeout(() => {
    console.log('任务队列函数3')
  }, 0)
  for (let i = 0; i < 5000; i++) {
    console.log('c的for循环')
  }
  console.log('c事件执行完')
}
a();
b();
c();
// 当a、b、c函数都执行完成之后，三个setTimeout才会依次执行
```

### 异步执行的运行机制

1. 所有任务在主线程执行，形成一个执行栈。
2. 主线程外，存在一个 任务队列，异步任务有了运行结果，就在任务队列中 放置一个事件。
3. 执行栈中的所有同步任务执行完毕后，就读取任务队列，对应的异步任务，结束等待状态，进入执行栈执行。
4. 主线程重复以上步骤。

### 宏任务 微任务

异步任务分为 宏任务（macrotask） 与 微任务 (microtask)，不同的API注册的任务会依次进入自身对应的队列中，然后等待 Event Loop 将它们依次压入执行栈中执行。

**宏任务(macrotask)：**：

script(整体代码)、setTimeout、setInterval、UI 渲染、 I/O、postMessage、 MessageChannel、setImmediate(Node.js 环境)

**微任务(microtask)：**

Promise、 MutaionObserver、process.nextTick(Node.js环境）

## Event Loop（事件循环）

每一次循环称为一个 tick

1. 执行栈选择最先进入队列的宏任务（通常是整个 script 整体代码），如果有则执行
2. 执行完检查微任务，有则执行至清空。
3. 更新 render（每一次事件循环，浏览器都可能更新渲染）
4. 重复以上

```js
    setTimeout(function () {
        console.log(1);
    });
    new Promise(function(resolve,reject){
        console.log(2)
        resolve(3)
    }).then(function(val){
        console.log(val);
    })
    console.log(4);
```

先执行`script`同步代码

```
先执行new Promise中的console.log(2),then后面的不执行属于微任务
然后执行console.log(4)
复制代码
```

执行完`script`宏任务后，执行微任务，console.log(3)，没有其他微任务了。

执行另一个宏任务，定时器，console.log(1)。

2、4、3、1

Event Loop只做一件事情，负责监听Call Stack和Callback Queue。当Call Stack里面的调用栈运行完变成空了，Event Loop就把Callback Queue里面的第一条事件(其实就是回调函数)放到调用栈中并执行它，后续不断循环执行这个操作。

![img](https://user-gold-cdn.xitu.io/2018/1/16/160fcd26f8023a85?imageslim)



JS的运行原理主要有以下几个方面：

- JS引擎主要负责把JS代码转为机器能执行的机器码，而JS代码中调用的一些WEB API则由其运行环境提供，这里指的是浏览器。
- JS是单线程运行，每次都从调用栈出取出代码进行调用。如果当前代码非常耗时，则会阻塞当前线程导致浏览器卡顿。
- 回调函数是通过加入到事件队列中，等待Event Loop拿出并放到调用栈中进行调用。只有Event Loop监听到调用栈为空时，才会从事件队列中从队头拿出回调函数放进调用栈里。
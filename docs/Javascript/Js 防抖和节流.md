# Js 防抖和节流

[https://juejin.im/post/5b651dc15188251aa30c8669](https://juejin.im/post/5b651dc15188251aa30c8669)

## 防抖（debounce）

**所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。**

防抖函数和节流函数很类似，但是稍有区别，防抖函数的定义是当事件触发完成之后再延迟触发，并且只触发一次；如果在触发完成之前再次触发，则会再次刷新延迟；简单理解为（如果事件不触发即不执行，并且只会执行一次，就是定时器最后走的那一次）

举个例子：假如有个弹簧，你一直往下按压只要你不松手就是不会弹出的，弹簧只有在你松手的那一瞬间才会弹出去；防抖函数也是如此，只要事情触发没有结束是不会执行的，只有在事件触发结束后延迟执行一次；

防抖函数分为非立即执行版和立即执行版。

```js
//定义方法即要做的事情
function fun(){
 console.log('onresize')
}
//定义事件触发要执行的方法，两个参数分别是传入的要做的事情和定时器的毫秒数
function debounce(fn,delay){
　　//定义一个变量作为等会清除对象
  var handle;
　　//这里用到了闭包，一个函数里面return另一个函数，变量相互签引导致垃圾回收机制不会销毁handle变量
  return function(){
　　　　　　//在这里一定要清除前面的定时器，然后创建一个新的定时器
   clearTimeout(handle)
　　　　　　//最后这个定时器只会执行一次也就是事件触发完成之后延迟500毫秒再触发（这里的变量赋值是跟定时器建立连接，进行地址赋值，一定要重新赋值给handle
   handle=setTimeout(function(){
    fn()
   },delay)
  }
}
//给浏览器添加监听事件resize
window.addEventListener('resize', debounce(fun, 500));
```

- 立即执行版

  ```js
  function debounce(func, wait) {
      var timeout;
      return function () {
          var context = this;
          var args = arguments;
          if (timeout) clearTimeout(timeout);
          timeout = setTimeout(function(){
              func.apply(context, args)
          }, wait);
      }
  }
  ```

- 非立即执行版

  ```js
  function debounce(func, wait) {
      var timeout;
  
      return function () {
          var context = this;
          var args = arguments;
          if (timeout) clearTimeout(timeout);
          timeout = setTimeout(function(){
              func.apply(context, args)
          }, wait);
      }
  }
  ```

- ```js
  /**
   * @desc 函数防抖
   * @param func 函数
   * @param wait 延迟执行毫秒数
   * @param immediate true 表立即执行，false 表非立即执行
   */
  function debounce(func,wait,immediate) {
      var timeout;
  
      return function () {
          var context = this;
          var args = arguments;
  
          if (timeout) clearTimeout(timeout);
          if (immediate) {
              var callNow = !timeout;
              timeout = setTimeout(function(){
                  timeout = null;
              }, wait)
              if (callNow) func.apply(context, args)
          }
          else {
              timeout = setTimeout(function(){
                  func.apply(context, args)
              }, wait);
          }
      }
  }
  ```

## 节流（throttle）

**所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。**节流会稀释函数的执行频率。

就是节省流量节省内存性能的一种函数

举个例子：一个水龙头一直在滴水，可能一次性会滴很多水，但是我们想控制它的频率 ，让它每1000毫秒滴一滴水，这个时候我们就可以用到节流函数来进行控制（简单可以理解为类似于周期性定时器）

当窗口大小不停的改变时，`onresize` 内的方法会一直在执行，为了节流，就可以便携定时器，在不停的改变窗口大小时，只有每一秒才会去触发一次你要在窗口大小改变时去执行的方法。

```js
//首先定义一个全局变量
var canRun = true;
//当浏览器窗口大小发生变化也就是重新计算窗口大小的时候触发
window.onresize = function(){
// 取反，canRun为false的情况下
if(!canRun){
//直接return，后面的代码不执行
 return
}
//走到这来就是canRun为true的情况，然后进行赋值为false
canRun = false
//设置一个定时器进行轮询操作
setTimeout( function () {
//这是要做的事情
 console.log("函数节流")
//最后记得重新赋值true继续让他取反
 canRun = true
//每隔1000毫秒也就是1秒钟就执行一次
 }, 1000)
}
```

对于节流，一般有两种方式可以实现，分别是时间戳版和定时器版。

- 时间戳版：

  ```js
  function throttle(func, wait) {
      var previous = 0;
  
      return function() {
          var now = Date.now();
          var context = this;
          var args = arguments;
          if (now - previous > wait) {
              func.apply(context, args);
              previous = now;
          }
      }
  }
  ```

- 定时器版:

  ```js
  function throttle(func, wait) {
      var timeout;
  
      return function() {
          var context = this;
          var args = arguments;
          if (!timeout) {
              timeout = setTimeout(function(){
                  timeout = null;
                  func.apply(context, args)
              }, wait)
          }
  
      }
  }
  ```

  ```js
  /**
   * @desc 函数节流
   * @param func 函数
   * @param wait 延迟执行毫秒数
   * @param type 1 表时间戳版，2 表定时器版
   */
  function throttle(func, wait ,type) {
      if(type===1){
          var previous = 0;
      }else if(type===2){
          var timeout;
      }
  
      return function() {
          var context = this;
          var args = arguments;
          if(type===1){
              var now = Date.now();
  
              if (now - previous > wait) {
                  func.apply(context, args);
                  previous = now;
              }
          }else if(type===2){
              if (!timeout) {
                  timeout = setTimeout(function(){
                      timeout = null;
                      func.apply(context, args)
                  }, wait)
              }
          }
  
      }
  }
  ```

1.防抖函数和节流函数都是用来提升性能优化及用户体验的一种方案；

2.防抖函数只会执行一次，且是最后触发的那一次，而节流函数会规律性的执行多次；

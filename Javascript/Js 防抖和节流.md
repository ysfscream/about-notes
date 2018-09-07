# Js 防抖和节流

https://juejin.im/post/5b651dc15188251aa30c8669

## 防抖（debounce）

**所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。**

防抖函数分为非立即执行版和立即执行版。

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

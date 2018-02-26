# HTML5 Web Storage

> 本地存储信息 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API) [区别参考](http://jerryzou.com/posts/cookie-and-web-storage/)
>  Web Storage API 提供机制， 使浏览器能以一种比使用Cookie更直观的方式存储键/值对。
> 应该注意的是，无论是 localStorage 还是 sessionStorage 中保存的数据都仅限于该页面的协议。

## coockie, sessionStorage, localStorage

- `Cookie` 是小甜饼的意思。非常小，它的大小限制为4KB左右，一般由服务器生成，可设置失效时间，存储在浏览器。如果在浏览器端生成 `Cookie`，默认是关闭浏览器后失效，每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题，每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题

- `sessionStorage` 为每一个给定的源（given origin）维持一个独立的存储区域，该存储区域在页面会话期间可用（即只要浏览器处于打开状态，包括页面重新加载和恢复，在新标签或窗口打开一个页面会初始化一个新的会话）。
    
    > 仅在当前会话下有效，关闭页面或浏览器后被清除
    
    ```JS
    // 保存数据到sessionStorage
    sessionStorage.setItem('key', 'value');
    
    // 从sessionStorage获取数据
    var data = sessionStorage.getItem('key');
    
    // 从sessionStorage删除保存的数据
    sessionStorage.removeItem('key');
    
    // 从sessionStorage删除所有保存的数据
    sessionStorage.clear();
    
    // 返回一个 Storage 对象。
    ```



- `localStorage` 同样的功能，但是在浏览器关闭，然后重新打开后数据仍然存在。
    
    > 除非被清除，否则永久保存

    ```JS
    localStorage.setItem('key', 'value')
    
    var data = localStorage.getItem('key')

    localStorage.removeItem('key')
    
    localStorage.clear()
    
    // 返回一个 Storage 对象。
    ```
    
    
    localStorage, sessionStorage 仅在客户端（即浏览器）中保存，不参与和服务器的通信
    
    sessionStorage，localStorage只能存字符串，针对对象需要存储storage的话可以序列化一下达到效果
    
    ```JS
    var obj = {};
sessionStorage.setItem('xxx', JSON.stringify(obj)); //序列化
obj = JSON.parse(sessionStorage.setItem('xxx')); //这时候需要反序列化一下

    //  localStorage 同理
    ```




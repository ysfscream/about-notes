# wxmp 导航 API 区别

```js
wx.navigateTo(OBJECT)
保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。

wx.redirectTo(OBJECT)
关闭当前页面，跳转到应用内的某个页面。

wx.navigateBack(OBJECT)
关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
```


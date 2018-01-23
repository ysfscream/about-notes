# Js date 传入时间

js 指定日期转换时间戳的问题

指定一个具体的时间转换时间戳，需要`yyyy/mm/dd hh:ii:ss`格式，`yyyy-mm-dd`在IE和Safari下是有问题的。

比如 使用

 ```js
const date = new Date('2017-3-3')
// chrome 可以 其它浏览器显示 NaN
// 需要转换 为 yyyy/mm

const date = new Date('2017/3/3')
 ```


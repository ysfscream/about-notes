# Js Babel

[Babel](https://babeljs.iov) 是一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。<br>

## 举个栗子

```javascript
//转码前
input.map(item => item + 1)

//转码后
input.map(function(item){
    return item + 1
})
```

### 配置文件 .babelrc

```JS
{
    "presets": [], //字段设定转码规则
    "plugins": [] //
}

```

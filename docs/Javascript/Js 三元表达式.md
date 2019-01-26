# Js 三元表达式

>本运算符经常作为`if`语句的简短形式来使用

## 语法

>`condition ? expr1 : expr2 `
>
>`condition`计算结果为true或false的表达式
>
>`expr1, expr2`值可以使任何类型的表达式

三元表达式可以赋给一个变量，可以嵌套多个三元表达式，可以进行多个操作并返回最后一个操作，如：

```js
var age = 16;

var result = age > 18 ? (
  alert('OK, you can go.'),
  'welcome'
) : (
  alert('You are much too young!'),
  '404'
);

console.log(result); // 404
```
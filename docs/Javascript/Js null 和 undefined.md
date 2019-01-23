# Js null 和 undefined

```js
var a = undefined;

var a = null;
```

上面代码中，a变量分别被赋值为undefined和null，这两种写法几乎等价。

undefined和null在if语句中，都会被自动转为false



```js
null == undefined // true
nul === undefined // false
```



```js
5+null
5

5+undefined
NaN
```



**undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义**

（1）变量被声明了，但没有赋值时，就等于undefined。

（2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。

（3）对象没有赋值的属性，该属性的值为undefined。

（4）函数没有返回值时，默认返回undefined。



**null表示"没有对象"，即该处不应该有值。**

null常用来描述“空值”，对null执行typeof运算，返回字符串“object”。

undefined是预定义的全局变量，它的值就是“未定义”，用typeof运算符得到undefined类型，返回undefined。变量没有初始化时是undefined，函数没有返回值，返回undefined。

如果想将它们赋值给变量或者属性，或者将它们作为参数传入函数，最佳选择是使用null。

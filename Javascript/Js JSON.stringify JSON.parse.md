# JSON 序列化

## JSON.stringify

>该方法是把JS的值或者对象转化为一个JSON字符串

```js
const data = {
	a: 'aaa',
	b: 123
}
JSON.stringify(data)
//输出
{ "a": "aaa", "b": 123 }


//还可以用函数过滤数据
function replacer(key, value) {
  if (typeof value === 'string') {
    return undefined;
  }
  return value;
} 
JSON.stringify(data, replacer)
//输出
{ "b": "123" }


// 控制缩进
JSON.stringify(data, replacer, space)
JSON.stringify(data, null, 2)
//输出
{ 
    "b": 
	"123" 
}


```


## JSON.parse

>使用 `JSON.stringify()` 做对象序列化时，如果一个属性为函数，那这个属性就会被忽略。还有就是属性为```undefined``` 如果属性为```null```正常输出  
>```JSON.parse()```将JSON数据解析为JS的原生值

```js

const data = JSON.parse({
	"a": "aaa",
	"b": 123	
})

//输出
data = {
	a: 'aaa',
	b: 123
}
```


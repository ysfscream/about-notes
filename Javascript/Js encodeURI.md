# Js encodeURI

`encodeURI()`  函数通过将特定字符的每个实例替换为一个、两个、三或四转义序列来对统一资源标识符 (URI) 进行编码 (该字符的 UTF-8 编码仅为四转义序列)由两个 "代理" 字符组成)。



```js
encodeURI('http://127.0.0.1:9999/topology/product=网关')
"http://127.0.0.1:9999/topology/product=%E7%BD%91%E5%85%B3"
```


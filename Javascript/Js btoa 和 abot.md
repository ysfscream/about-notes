# Js btoa 和 abot

## window.btoa

从 String 对象中创建一个 base-64 编码的 ASCII 字符串，其中字符串中的每个字符都被视为一个二进制数据字节。

>该方法仅仅支持 在Latin1 范围的字符进行base64 编码！
>

## window.atob

对用base-64编码过的字符串进行解码 。你可以使用 window.btoa() 方法来编码一个可能在传输过程中出现问题的数据，并且在接受数据之后，使用 atob() 方法再将数据解码。例如：你可以编码、传输和解码操作各种字符，比如0-31的ASCII码值。

例如：
```js
window.btoa('ysfscream')
"eXNmc2NyZWFt"
window.atob('eXNmc2NyZWFt')
"ysfscream"
```
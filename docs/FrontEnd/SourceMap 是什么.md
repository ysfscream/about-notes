# SourceMap 是什么

> source-map 存储着位置信息的一个文件，因为开发时的源码通过 webpack 构建混淆压缩后的生产环境部署的代码不一样

在 webpack 的 development 模式下，会自动开启 source-map

在 webpack 配置中设置 devtool: 'none'，那么就会关闭 source-map

[https://webpack.js.org/configuration/devtool/](https://webpack.js.org/configuration/devtool/)

sourcemap文件的格式:

```javascript
{
    version : 3, // SourceMap的版本，目前为3
    sources: ["***.js,***.js"], // 转换前的文件，该项是一个数组，表示可能存在多个文件合并
    names: ["***", "***", "**", "***"], // 转换前的所有变量名和属性名
    mappings: "AACvB,gBAAgB,EAAE;AAClB;", // 记录位置信息的字符串
    file: "out.js", // 转换后的文件名
    sourcesContent: " \t// The module cache\n", // 转换后的代码
    sourceRoot : "" // 转换前的文件所在的目录。如果与转换前的文件在同一目录，该项为空
}
```

mappings

以"AACvB,gBAAgB,EAAE;AAClB;"为例:

每个分号对应转换后源码的一行；

每个逗号对应转换后源码的一个位置；

AACvB 代表该位置转换前的源码位置，以 VLQ 编码表示；

## VLQ 编码

VLQ是Variable-length quantity 的缩写，是一种通用的、使用任意位数的二进制来表示一个任意大的数字的一种编码方式。这种编码最早用于MIDI文件，后来被多种格式采用，它的特点就是可以非常精简地表示很大的数值，用来节省空间。

将 137 改写成二进制形式：10001001

七位一组做分组，不足的补0：0000001 0001001

最后一组开头补0，其余补1：10000001 00001001

所以，137的VLQ编码形式为10000001 00001001

## Base64 VLQ

如何对数值137进行Base64 VLQ编码：

将137改写成二进制形式：10001001
127是正数，末位补0：100010010
五位一组做分组，不足的补0：01000 10010
将组倒序排序：10010 01000
最后一组开头补0，其余补1：110010 001000
转64进制：y 和 I

可以看出：

在Base64 VLQ中，编码顺序是从低位到高位

而在VLQ中，编码顺序是从高位到低位

对于做前端异常监控来说，source-map 是很有必要的，但是对于性能要求极高的项目，那么可能还是要自己去实现一套独特的监控方式。

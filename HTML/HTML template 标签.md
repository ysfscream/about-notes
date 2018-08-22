# HTML <template> 标签

JavaScript 运行时 才能实例化

> HTML <template> 元素 **是一种用于保存客户端内容的机制，该内容在页面加载时不被渲染，但可以在运行时使用JavaScript进行实例化。可以将一个模板视为正在被存储以供随后在文档中使用的一个内容片段。虽然, 在加载页面的同时,解析器确实处理 **<template>**元素的内容，这样做只是确保这些内容是有效的; 然而,元素的内容不会被渲染。

[代码示示例](http://jsbin.com/qimaw/1/edit?html,output)

除此以外，还包含只读的 `content` 属性，通过它可以读取模板内容。一般来说，可以通过判断 `content` 属性是否存在来判断浏览器是否支持 **<template> **元素。



在 template 标签中，js 未编译和运行以前，里面的内容不会显示
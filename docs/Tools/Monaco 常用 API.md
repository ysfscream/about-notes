# Monaco 常用 API

[https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroptions.html](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroptions.html)

```javascript
//创建编辑器
editor = monaco.editor.create(document.getElementById("editor"), {
    //内容
    value: 'console.log("Hello world!");',
    //语言
    language: 'javascript',
    //自适应调整
    automaticLayout: true,
    //主题，三款：vs、vs-dark、hc-black
    theme: 'vs',
    //代码略缩图
    minimap: {
        enabled: false
    }
});
```

## 常用的方法

```javascript
//设置值
editor.setValue('console.log("Hello world!");');

//获取值
editor.getValue();

//获取选中的行信息
editor.getSelection();

//获取某一行的内容
editor.getModel().getLineContent(1);

//获取每一行的内容
editor.getModel().getLinesContent();

//内容改变事件
editor.onDidChangeModelContent(function(e){
　　console.log(e);
　　console.log(editor.getValue());
});

//添加按键监听
editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, function () {
　　console.log('Ctrl + S 保存')
})

//设置主题
monaco.editor.setTheme('vs-dark');

//改变属性
editor.updateOptions({
　　//关闭行号
　　lineNumbers: "off",
    // 行号的宽度
    lineNumbersMinChars: 3,
});

//渲染代码得到HTML
monaco.editor.colorize('console.log("Hello world!");', 'javascript').then(function (data) {
    console.log(data);
});

//渲染节点代码
<pre id="code" data-lang="javascript" style="width:500px;">console.log("Hello world!");</pre>
monaco.editor.colorizeElement(document.getElementById('code'));
```

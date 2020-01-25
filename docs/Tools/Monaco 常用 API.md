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

## 更新选项设置

例如更新 `tabSize` 需要先获取 `editor` 的 `model`，然后调用 `updateOptions`

```javascript
const editor = monaco.editor.create(
  document.getElementById("editor"), {
    language: "html",
    value: "<p>Hello World!</p>",
});

editor.getModel().updateOptions({ tabSize: 2 })
```

## 如何销毁

```javascript
this.editor.dispose()
```

**深坑！！！**这里只是销毁了你的 editor，如果你注册了 `registerHoverProvider`，`registerCompletionItemProvider` 等方法，是不会被销毁的。解决方法：

> registerCompletionItemProvider returns an IDisposable with the dispose method which I can call on unmount

这些方法都会返回一个 `IDisposable`，而且都带有 `dispose` 方法。和 `editor.dispose()` 在同一地方调用即可。

```javascript
created() {
    this.disposeID = monaco.registerCompletionItemProvider('json', {
        provideCompletionItems: (model, position) => {
            // ...
        },
      })
},

beforeDestroy(){
    if (this.editor) {
        this.editor.dispose()
        this.disposeID.dispose() // 即可销毁
    }
},
```

## 自定义语言

语言的定义文件可以参考：[https://github.com/microsoft/monaco-languages](https://github.com/microsoft/monaco-languages)

如何自定义语言的使用：[https://juejin.im/post/5c0dc3fe6fb9a049d235e093](https://juejin.im/post/5c0dc3fe6fb9a049d235e093)

自定义语言后如何设置自定义语言的 config

```javascript
// custom-lang.js
export const conf = {
  comments: {
    lineComment: '--',
    blockComment: ['/*', '*/'],
  },
  brackets: [
    ['{', '}'],
    ['[', ']'],
    ['(', ')']
  ],
  autoClosingPairs: [{
      open: '{',
      close: '}'
    },
    {
      open: '[',
      close: ']'
    },
    {
      open: '(',
      close: ')'
    },
    {
      open: '"',
      close: '"'
    },
    {
      open: '\'',
      close: '\''
    },
  ],
  surroundingPairs: [{
      open: '{',
      close: '}'
    },
    {
      open: '[',
      close: ']'
    },
    {
      open: '(',
      close: ')'
    },
    {
      open: '"',
      close: '"'
    },
    {
      open: '\'',
      close: '\''
    },
  ]
};
const languages = {
    //... 自定义语言内容
}
export default languages

// monaco-editor.js
import customLang, { conf } from 'custom-lang'
// Custom language config
monaco.languages.setLanguageConfiguration('custom-lang', conf)
// Basic token for this custom language
monaco.languages.setMonarchTokensProvider('custom-lang', customLang)
```

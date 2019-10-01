# CSS 换行

- 强制不换行

```CSS
div {
  white-space:nowrap;
}
```

- 自动换行

```CSS
div {
  word-wrap: break-word;
  word-break: normal;
}
```

- 强制英文单词断行

```CSS
div {
  word-break:break-all;
}
```

`<pre>` 标签内的换行

有个pre-wrap，保留空白符序列，但是正常地进行换行。

```css
div {
  white-space: pre-wrap;
  word-wrap: break-word;
}
```

参考：[http://www.cnblogs.com/johnwonder/archive/2010/04/07/1706073.html](http://www.cnblogs.com/johnwonder/archive/2010/04/07/1706073.html)

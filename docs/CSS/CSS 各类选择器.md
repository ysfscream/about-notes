# CSS 各类选择器

## 基础

### 基本元素选择器

- `*`：通用元素选择器，匹配任何元素
  
- .footer：匹配 class="footer" 的所有元素

- `#comments`：匹配 id="comments" 的所有元素

- `side` 匹配标签为 `<side>` 的所有元素

### 组合选择元素器

- 选择器组 A, B 匹配满足A（和/或）B的任意元素（参见下方 同一规则集上的多个选择器）
  
- 后代选择器 A B 匹配B元素，满足条件：B是A的后代结点（B是A的子节点，或者A的子节点的子节点）

- 子选择器 A > B 匹配B元素，满足条件：B是A的直接子节点
- 相邻兄弟选择器 A + B 匹配B元素，满足条件：B是A的下一个兄弟节点（AB有相同的父结点，并且B紧跟在A的后面）

- 通用兄弟选择器 A ~ B 匹配B元素，满足条件：B是A之后的兄弟节点中的任意一个（AB有相同的父节点，B在A之后，但不一定是紧挨着A

示例：

- a, span：匹配所有 a 元素和 span 元素
- div span：匹配所有 div 元素下的 所有 span 元素
- div > span：匹配所有 div 元素下的所有子元素 span
- 毗邻兄弟选择器`+` `div + p`: 可以选择紧随 div 元素后且与其同级的 p 元素
- 一般兄弟选择器 `~` `p ~ span`: 将会匹配同一父元素下，p 元素后的所有 span 元素

- 属性选择器
  [target]：匹配含有 target 属性的所有元素
  [target=_blank]：匹配 target 属性值等于 _blank 的所有元素
  [title~=flower]：匹配 title 属性值中包含 flower 单词的所有元素（flower 需被空格截断）
  [lang|=en]：匹配 lang 属性值中以 en 开头的单词的所有元素（en 后不能有空格）
  [src^="https"]：匹配 src 属性值中以 https 开头的所有元素
  [src$=".pdf"]： 匹配 src 属性值中以 .pdf 结尾的所有元素
  [src*="abc"]：匹配 src 属性值中包含 abc 字符串的所有元素

伪类：:active、:any-link、:blank、:checked、:current、:default、:defined、:dir()、:disabled、:drop、:empty、:enabled、:first、:first-child、:first-of-type、:fullscreen、:future、:focus、:focus-visible、:focus-within、:has()、:host、:host()、:host-context()、:hover、:indeterminate、:in-range、:invalid、:is()、:lang()、:last-child、:last-of-type、:left、:link、:local-link、:not()、:nth-child()、:nth-col()、:nth-last-child()、:nth-last-col()、:nth-last-of-type()、:nth-of-type()、:only-child、:only-of-type、:optional、:out-of-range、:past、:placeholder-shown、:read-only、:read-write、:required、:right、:root、:scope、:target、:target-within、:user-invalid、:valid、:visited、:where()

伪元素：::after (:after)、::backdrop、::before (:before)、::cue (:cue)、::first-letter (:first-letter)、::first-line (:first-line)、::grammar-error、::marker、::placeholder、::selection、::slotted()、::spelling-error

链接：[https://hacpai.com/article/1546396257706](https://hacpai.com/article/1546396257706)

## class 多重选择器区分

```css
.one.two{}     /*兩個 class 中沒有空格*/
.one .two{}    /*兩個 class 中有空格*/
.one, .two{}   /*兩個 class 中出現逗號*/
```

- 第一个中间没有包含空格，表示必须同时具有 one two 的 class 时，才能被选择到。
- 第二个中间包含空格，必须要在 one 的后代（也就是 one 的子节点） two 里面才能被选择到
- 第三个中间包含空格，有逗号，意思是指 class 中有 one 或 two，都会被选择到。
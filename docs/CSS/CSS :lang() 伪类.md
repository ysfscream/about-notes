# CSS :lang() 伪类

> `:lang()` CSS 伪类用来匹配不同的语言下的元素

```html
<html lang="en">
  <p>This is a English p! color is yellow</p>
</html>

<html lang="zh">
  <p>这是中文的 p！颜色是红色</p>
</html>
```

```css
html:lang(en) p {
  color: yellow;
}
html:lang(zh) p {
  color: red;
}
```

```html
<div lang="en"><q>This English quote has a <q>nested</q> quote inside.</q></div>
<div lang="fr"><q>This French quote has a <q>nested</q> quote inside.</q></div>
<div lang="de"><q>This German quote has a <q>nested</q> quote inside.</q></div>
```

```css
:lang(en) > q { quotes: '\201C' '\201D' '\2018' '\2019'; }
:lang(fr) > q { quotes: '« ' ' »'; }
:lang(de) > q { quotes: '»' '«' '\2039' '\203A'; }
```

# CSS 滚动条相关

## 一直显示滚动条

[http://jsfiddle.net/simurai/UsvLN/](http://jsfiddle.net/simurai/UsvLN/)

[http://simurai.com/blog/2011/07/26/webkit-scrollbar](http://simurai.com/blog/2011/07/26/webkit-scrollbar)

[https://codeday.me/bug/20170520/17148.html](https://codeday.me/bug/20170520/17148.html)

```html
<ul>
    <li>I want the user to know that an area is scrollable</li>
    <li>But in Lion the bar disappears</li>
    <li>The only way the user would know that</li>
    <li>they can scroll is if they make the scroll gesture</li>
    <li>Is there a way to keep the scrollbar present all the time?</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
</ul>
```

```css
body { padding: 50px; }

ul {
    max-height:300px;
    overflow:auto;
}

/* Overwrite the default to keep the scrollbar always visible */

::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
}

::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0,0,0,.5);
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
}
```

## 不显示滚动条

```css
/* Firefox浏览器： */
scrollbar-width: none; /* Firefox */

/* IE浏览器： */
-ms-overflow-style: none; /* IE 10+ */

/* Chrome 和 Safari 浏览器： */
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
```

如果滚动时需要显示的话就在 hover 时设置为 auto

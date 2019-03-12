# CSS div 居中

参考 -> https://github.com/simaQ/cssfun/issues/3

## 对需要水平居中的DIV 加入 margin: auto

```css
margin-left: auto;

margin-right: auto;

```

## 先对元素 **设置高度**

```css
position: absolute;
margin: auto;
top: 0; left: 0; right: 0; bottom: 0;
overflow: auto;
```

## 宽度高度不固定DIV水平居中

html部分

```html
    <div class="container">
    <div class="center"><a href="#">1</a><a href="#">2</a><a href="#">3</a>
    <div style="clear:both"></div></div>  
```

css部分

```css
    .container{width:500px;height:80px;background:#C2300B;margin-left:50px;padding-top:10px;text-align:center;}
    .center{display:inline-block;border:2px solid #fff;}
    .center{_display:inline;} /*针对ie6 hack*/
    .center a{float:left;border:1px solid #fff;padding:5px 10px;margin:10px;color:#fff;text-decoration:none;}
```

代码要点：

- 父容器container加css属性 text-align:center;
- 子容器center加css属性display:inline-block;
- .center{_display:inline;} 为针对ie6的hack

## 宽度高度不固定DIV垂直居中

html部分

```html
  <div id="vc"><div id="vci"><div id="content">
  我们垂直居中了，我们水平居中了
  </div></div></div>
```

css部分

```css
      #vc { display:table; background-color:#C2300B; width:500px; height:200px; overflow:hidden; margin-left:50px; _position:relative; }
      #vci { vertical-align:middle; display:table-cell; text-align:center; _position:absolute; _top:50%; _left:50%; }
      #content { color:#fff; border:1px solid #fff; display:inline-block; _position:relative; _top:-50%; _left:-50%; }
```

代码要点：

- 父容器vc的css属性 display:table;overflow:hidden;
- 子容器vci的css属性 vertical-align:middle;display:table-cell;
- 针对ie6的hack，vci容器的 _position:absolute;_top:50%; 和content容器的 _position:relative; _top:-50%;
- 如果不需要水平居中的话，需要注释掉vci容器的text-align:center;_left:50%;以及content的display:inline-block;_left:-50%

## 宽度高度固定水平垂直居中

html部分

```html
    <div class="guding"><div class="gd">居中了</div></div>
```

css部分

```css
    .guding{width:500px;height:200px;background:#c2300b;margin-left:50px;position:relative;}
    .gd{width:50px;height:20px;background:#fff;position:absolute;top:50%;left:50%;margin-top:-10px;margin-left:-25px;}
```

代码要点:

- 父容器要用相对定位position:relative;否则的话子元素会相对于浏览器窗口进行绝对定位。
- 子容器绝对定位，top:50%;left:50%;margin-top，margin-left的值取该容器高度，宽度的一半的负值。

## 使用 flexbox 布局

抛开兼容性，我想这是一个完美的居中，不需要考虑宽度和高度值。

```css
<div id="parent">
    <div id="item">test</div>
</div>
#parent {
    display: flex;
    width: 400px; /* 宽度值，随便啦 */
    height: 400px;  /* 高度值，随便啦 */
    background-color: yellow;
}

#item {
    width: 100px;/* 宽度值，随便啦 */
    height: 20px;/* 高度值，随便啦 */
    margin: auto;
    background-color: red; /* Magic! */
}
```

## 绝对定位的居中

当子元素的宽高确定的时候，可以先设置 top、left 来使元素偏移至父容器的中间位置附近，再通过 margin 负值将元素“拉”至居中，此时 margin 值刚好是子元素本身宽高的一半。

```css
.container {
    width: 200px;
    height: 200px;
    position: relative;
}
.item {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -50px;
    margin-top: -50px;
}
```

当子元素的宽高不确定的时候，margin 值也就不能确定了，这个时候我们可以使用 transform 中的 2D 平移来达到同样的效果。

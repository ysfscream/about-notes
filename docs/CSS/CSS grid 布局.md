# CSS grid 布局

> CSS网格布局引入了二维网格布局系统，可用于布局页面主要的区域布局或小型组件 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)

```HTML
 <div class="wrapper">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
    <div class="item6">6</div>
  </div>
```

```CSS
.wrapper {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}

.item1 {
  background: #F1E3F3;
  grid-column: 1 / 3
}

.item2 {
  background: #C2BBF0;
}

.item3 {
  background: #4796FF;
  grid-row: 2 / 4
}

.item4 {
  background: #8CD0F1;
  grid-column: 2 / 4
}

.item5 {
  background: #FFE74C;
}

.item6 {
  background: #E01A4F;
}
```
![](/about-blog/media/1513147152410.jpg)

> 网格间距  `grid-column-gap: 10px; grid-row-gap: 1em;`

```CSS
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
  grid-column-gap: 20px;
  grid-row-gap: 2em;
}
```

![](/about-blog/media/WX20171213-151505@2x.png)

### fr 单位

> 轨道可以使用任何长度单位进行定义。 网格还引入了一个额外的长度单位来帮助我们创建灵活的网格轨道。新的fr单位代表网格容器中可用空间的一等份。下一个网格定义将创建三个相等宽度的轨道，这些轨道会随着可用空间增长和收缩。

```HTML
<div class="wrapper">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
    <div class="item6">6</div>
</div>
```

```CSS
.wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
```
![](/about-blog/media/1513148129432.jpg
)

> 在轨道清单中使用 `repeat()`, 有着多轨道的大型网格可使用 `repeat()`标记来重复部分或整个轨道列表

```CSS
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

> Repeat 语句可以用于重复轨道列表中的一部分。在下面的例子中我创建了一个网格：它起始轨道为20像素，接着重复了4个1fr的轨道，最后再添加了一个20像素的轨道。

```CSS
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(4, 1fr) 20px;
}
```
![](/about-blog/media/1513148914157.jpg)

> Repeat 语句可以传入一个轨道列表，因此你可以用它来创建一个多轨道模式的重复轨道列表。在下一个例子中，网格将有共计6个轨道，为1个1fr轨道后面跟着1个2fr轨道，该模式重复3次。

```CSS
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr 2fr);
}
```
![](/about-blog/media/WX20171213-151146@2x.png)

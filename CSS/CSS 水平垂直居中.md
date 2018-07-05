# CSS水平垂直居中

注意：

> `text-align: center`、`verticle-align: center` 是否可行呢？答案也是否定的。这两个属性只能用于行内元素，对于块级元素的布局是无效的。

实现水平居中可以使用 `margin: 0 auto`

### 0.flex 布局

父级容器设置 display: flex，设置justify-content，align-items

```css
#dad {
    display: flex;
    justify-content: center;
    align-items: center
}
```



### 1.文本的水平垂直居中

>text-aligen:center + line-height（等于div的高）

```HTML
<div class="warp">
	水平垂直居中
</div>
```
```CSS
.warp {
	height: 400px;
	line-height: 400px;
	background: #ccc;
	text-align: center;
}
```
**该方法只适合单行文字的水平居中**

### 2.盒子的水平垂直居中

>给容器设置绝对定位 设置固定的高宽 并且定位高度和宽度（top left）为50% 和margin-top margin-left 为容器高宽的负的高宽的一半

```HTML
<div class="vertical">
  content
</div>
```
```CSS
.vertical{
  border: 1px solid;
  height:200px;
  width: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -100px;
}
```
**水平垂直居中的元素要有明确的大小（换句话说就是要有确切的宽和高度值）；给元素进行绝对定位，并设置left,top值为“50%”（此处最好使用绝对定位，如果只是单单水平居中，此处可以换成相对定位）；最后设置margin-top和margin-left的负值，而且其值分别为元素高度和宽度的一半。**

### 3.行内元素的水平居中

>要实现行内元素（span a img input button select textarea...）只需把其包裹在父级块级元素中（div li p h section...）在父层元素中设置`text-align: center`


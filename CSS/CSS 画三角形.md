# CSS 画三角形

摘自 -> [使用 css绘制箭头](http://simaq.github.io/css/2014/03/30/implementation-of-arrows-with-css/)

## 基本原理

通过截取border的部分拐角实现。

## 梯形

梯形方向调整 border 的位置即可，大小调整 border 的 px

```css
.demo1 {
	border: 10px solid white;
	height: 10px;
	width: 20px;
	border-bottom-color: red;
}
```

## 三角形

- 三角方向调整 border 的位置即可

```css
.demo1 {
	border: 10px solid white;
	height: 0px;
	width: 0px;
	border-bottom-color: red;
}
```

- 任意角度的三角形

  调整边框的宽度就可以配置出任意角度的三角形（这里的角度是指三角形三个角的度数）

```css
#demo3 {
   border: 10px solid transparent;
   border-left: 20px solid #000;
   width: 0;
   height: 0;
}
```

​		通过伪元素绘制出的两个，一个与背景色相同覆盖部分红色箭头，形成三		角线

- 三角形跟矩形组合成提示框

  调整三角形在矩形上的位置只需要调整伪元素的上下左右left top right bottom的位置， 方向调整 border 的 left top right bottom，大小调整 border-width即可

```css
#demo {
	width: 100px;
	height: 100px;
	background: #ccc;
	margin: 100px;
	position: relative;
	border: 4px solid #333;
}
#demo:after, #demo:before {
	border: solid transparent;
	height: 0;
	width: 0;
	content: "";
	position: absolute;
	left: 100%;
}
#demo:after {
	border-width: 9px;
	border-left-color: #ccc;
	top: 15px;
}
#demo:before {
	border-width: 14px;
	border-left-color: #333;
	top: 10px;
}
```


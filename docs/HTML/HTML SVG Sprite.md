# HTML SVG Sprite

>摘自 -> https://www.w3cplus.com/svg/how-to-create-an-icon-system-using-svg-symbols.html
				http://www.zhangxinxu.com/wordpress/2014/07/introduce-svg-sprite-technology/?spm=a313x.7781069.1998910419.50

>svg 可以呀看做是一个舞台，symbol 则是舞台上一个一个组装好的元件，这这些一个一个的元件就是我们即将使用的一个一个SVG图标

一个 svg 图标：
```HTML
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24"> <path fill="#E86C60" d="M17,0c-1.9,0-3.7,0.8-5,2.1C10.7,0.8,8.9,0,7,0C3.1,0,0,3.1,0,7c0,6.4,10.9,15.4,11.4,15.8 c0.2,0.2,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2C13.1,22.4,24,13.4,24,7C24,3.1,20.9,0,17,0z"></path> </svg>
```

然后将内容包裹在<symbol>元素中：
```HTML
<svg>
    <symbol viewBox="0 0 24 24" id="heart">
        <path fill="#E86C60" d="M17,0c-1.9,0-3.7,0.8-5,2.1C10.7,0.8,8.9,0,7,0C3.1,0,0,3.1,0,7c0,6.4,10.9,15.4,11.4,15.8 c0.2,0.2,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2C13.1,22.4,24,13.4,24,7C24,3.1,20.9,0,17,0z"></path>
    </symbol>
</svg>
```

舞台上只是放置了图标，如果你不使用(use)，是看不见的
```HTML
<svg style="display: none;"> 
	<symbol viewBox="0 0 24 24" id="heart">
 		<path fill="#E86C60" d="M17,0c-1.9,0-3.7,0.8-5,2.1C10.7,0.8,8.9,0,7,0C3.1,0,0,3.1,0,7c0,6.4,10.9,15.4,11.4,15.8 c0.2,0.2,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2C13.1,22.4,24,13.4,24,7C24,3.1,20.9,0,17,0z">
		</path> 
	</symbol>
</svg> 
<svg> 
	<use xlink:href="#heart"/>
</svg>
```


SVG中的use元素可以调用其他SVG文件的元素，只要在一个文档中。

定义了一组图形对象（使用<symbol>元素）之后，可以使用<use>元素来对它进行无限次实例化展示。你使用xlink:href属性来指定你想要展示哪一组图标，这里，我们要展示的是id为#heart的<symbol>元素的 id。

包裹<symbol>元素的SVG标签加了一个style="display: none;"的样式：这是因为即使<symbol>本身没有显示，但是包裹它的<svg>元素依旧会渲染并占用一些页面空间，这就是为什么我们需要隐藏svg元素。

给SVG <use>添加样式 。SVG 图标引用这种方式有自己单独的DOM结构（也就是shadow DOM），CSS选择器并不能获取，想要改变图标的填充颜色。首先，确保fill属性不是svg文件中内联定义的，删除 svg 中的 fill 元素，在 定义修改 class 的样式即可。

只改变一个图标的fill 我们给这个图标再单独指定一个class即可

```HTML
<svg class="icon my-class-name"> <use xlink:href="img/myicons.svg#heart"></use> <svg>
```

```CSS
.my-class-name { fill: red; }
```







# CSS 0.5px 线条

参考 => https://juejin.im/post/5ab65f40f265da2384408a95

> **什么是像素**？
>
> 像素是屏幕显示最小的单位，在一个1080p的屏幕上，它的像素数量是1920 * 1080，即横边有1920个像素，而竖边为1080个。一个像素就是一个单位色块，是由rgba四个通道混合而成。对于一个1200万像素的相机镜头来说，它有1200万个感光单元，它能输出的最大图片分辨率大约为3000 * 4000。
> 
> 那么像素本身有大小吗，**一个像素有多大**？
> 
> 有的，如果一个像素越小，那么在同样大小的屏幕上，需要的像素点就越多，像素就越密集，如果一英寸有435个像素，那么它的dpi/ppi就达到了435。Macbook Pro 15寸的分辨率为2880 x 1800，15寸是指屏幕的对角线为15寸（具体为15.4），根据长宽比换算一下得到横边为13寸，所以ppi为2880 / 13 = 220 ppi. 像素越密集即ppi(pixel per inch)越高，那么屏幕看起来就越细腻越高清。
> 
> 在Mac/Windows上可以设置屏幕显示的分辨率，Mac默认为设备分辨率的一半，它的dpr = 2，即长和宽用2个像素表示1个像素，所以2880个物理像素点实际上只表示1440个逻辑像素。
> 
> 作者：人人网FED  
链接：https://juejin.im/post/5ab65f40f265da2384408a95  
来源：掘金  
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

直接设置 0.5px 不同的浏览器有不同的效果 chrome会根据 0.5 四舍五入到 1而firefox/safari能够画出半个像素的边，并且Chrome会把小于0.5px的当成0，而Firefox会把不小于0.55px当成1px，Safari是把不小于0.75px当成1px，进一步在手机上观察IOS的Chrome会画出0.5px的边，而安卓(5.0)原生浏览器是不行的。所以直接设置0.5px不同浏览器的差异比较大，并且我们看到不同系统的不同浏览器对小数点的px有不同的处理。所以如果我们把单位设置成小数的px包括宽高等，其实不太可靠，因为不同浏览器表现不一样。

## 设置1px，然后 scale 0.5

```html
<p>0.5px</p>
<div class="hr half-px"></div>
<p>1px</p>
<div class="hr one-px"></div>
```

```css
.hr {
	width: 300px;
	background-color: red;
}
.hr.half-px {
	height: 1px;
	transform: scaleY(0.5);
	transform-origin: 50% 100%;
}
.hr.one-px {
	height: 1px;
}
```

但是通过transform: scale会导致Chrome变虚了，而粗细几乎没有变化。所以需要加上transform-origin: 50% 100%

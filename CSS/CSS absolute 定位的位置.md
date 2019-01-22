# CSS absolute 定位的位置

`position`为`absolute`的元素如果没有设置`left`, `top`等值与`left:0;top:0`的的效果不一样，例如一个`div`中有个`absolute`属性元素，其没有`left`或是`top`值，其会像个普通的`inline-block`属性元素一样呆在这个`div`里面，但是一旦设置了`left:0;top:0`，这个`absolute`元素直接从DOM tree里面脱离，独立于文档流，**结果相对于最近的`relative`属性的祖先标签定位（如果没有，就`body`定位）。** 由于我们平时使用`absolute`都离不开`left`，`top`之类的值，所以才会概念不清。

如果不想让元素 独立于 body 定位，可以设置 *该元素想要定位的范围的元素* 的`position`为`relative`


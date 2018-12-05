# CSS pointer-events

- 阻止用户的点击动作产生任何效果
- 阻止缺省鼠标指针的显示
- 阻止CSS里的`hover`和`active`状态的变化触发事件
- 阻止JavaScript点击动作触发的事件

`pointer-events:none`的作用是让元素实体“虚化”。例如一个应用`pointer-events:none`的按钮元素，则我们在页面上看到的这个按钮，只是一个虚幻的影子而已，您可以理解为海市蜃楼，幽灵的躯体。当我们用手触碰它的时候可以轻易地没有任何感觉地从中穿过去。

这个`pointer-events`属性有很多可以使用的属性值，但大部分都是针对SVG的：`auto`, `none`, `visiblePainted*`, `visibleFill*`, `visibleStroke*`, `visible*`, `painted*`, `fill*`, `stroke*`, `all*`, 以及 `inherit`。其中`none`值能阻止点击、状态变化和鼠标指针变化：

```css
.disabled { pointer-events: none; }
```

一些需要注意的关于`pointer-events`的事项：

- 子元素可以声明`pointer-events`来解禁父元素的阻止鼠标事件限制。
- 如果你对一个元素设置了click事件监听器，然后你移除了`pointer-events`样式声明，或把它的值改变为`auto`，监听器会重新生效。基本上，监听器会遵守`pointer-events`的设定。
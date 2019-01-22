# Js 判断元素是否在可视区域中

Jquery 版本

```js
var item = $('#' + id);
var itemOffsetTop = $('#' + id).offset().top;
var itemOuterHeight = $('#' + id).outerHeight(true);
var winScrollHeight = $(window).scrollTop();
var winHeight = $(window).height();
if (!(winScrollHeight > itemOffsetTop + itemOuterHeight) && !(winScrollHeight < itemOffsetTop - winHeight)) {
    console.log('出现了')
} else {
    anim.stop('消失了');
}
```


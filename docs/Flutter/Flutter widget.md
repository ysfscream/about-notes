# Flutter widget

## ClipRRect Widget

> 如果想让矩形的 Widget 变圆角，可以使用该 widget

```dart
ClipRRect(
 borderRadius:
   BorderRadius.circular(16.0),
   child:MyDishPicWidget()
);
```

如果想切圆形可以使用ClipOval，切路径可以使用ClipPath;

## Align

> Align一般都是当做一个控件的属性，设置child的对齐方式，例如居中、居左居右等，并根据child尺寸调节自身尺寸。

- 当widthFactor和heightFactor为null的时候，当其有限制条件的时候，Align会根据限制条件尽量的扩展自己的尺寸，当没有限制条件的时候，会调整到child的尺寸；

- 当widthFactor或者heightFactor不为null的时候，Aligin会根据factor属性，扩展自己的尺寸，例如设置widthFactor为2.0的时候，那么，Align的宽度将会是child的两倍。

- alignment 对齐方式，一般会使用系统默认提供的9种方式，但是并不是说只有这9种，系统提供的9种方式只是预先定义好的。

`top center bottom`

`left center right`

也可以自定义：`Aligment(1.0, 1.0)`

Alignment实际上是包含了两个属性的，其中第一个参数，-1.0是左边对齐，1.0是右边对齐，第二个参数，-1.0是顶部对齐，1.0是底部对齐。根据这个规则，也可以自定义对齐方式.

## Padding

- EdgeInsets.symmetric(vertical: 20, horizontal: 10) ，可以指定垂直和水平方向的边距，也可以单独指定垂直或者水平方向的边距

## transiton

- 包含的 widget 有 FadeTransiton, ScaleTransiton, RotationTransition

## Layoutbuilder

- 如要获得某一 Widget 的尺寸范围，只需给它包裹一层 LayoutBuilder 的 Widget; 在构建前如果需要确定小部件有多大则可以使用LayoutBuilder;

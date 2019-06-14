# Flutter 记录

## 注意

- Android Studio 第一次运行 Android 项目时，开全局代理

- 运行 `flutter packages get` 后需要重启项目

- Flutter/Dart Error: Unexpected tag 0 (Nothing) in (修改拆分了文件路径后) 错误解决：

```dart
Clicking the "Restart Debugging" fixed the issues.

I believe the problem may be related to the fact that I changed from a StatefullWidget to a StatelessWidget without restarting the debugger.
```

- 对于父组件传过来的值，想要拿到其值，要在 initState 中 通过 widget 拿到

```dart
int _counter

@override
initState() {
  _counter = widget.counter
}
```

- `error: Only static members can be accessed in initializers. (implicit_this_reference_in_initializer at` 报错时，将初始化报错那一栏放到 `initSate` 中进行初始化

```dart
int _counter = 0
List<widget> _pages = List();

@override
initState() {
  _pages = [NewPages(coutner: _counter), TestPages()]
}
```

> initializes a class-level field. This code is executed before the constructor is completed and the object fully initialized, therefore accessing this. (implicit or explicit) is forbidden because it can't be guaranteed that what you attempt to access is already initialized.

- `fontSize`：该属性和Text的 `textScaleFactor` 都用于控制字体大小。但是有两给主要区别：fontSize可以精确指定字体大小，而textScaleFactor只能通过缩放比例来控制。
textScaleFactor主要是用于系统字体大小设置改变时对Flutter应用字体进行全局调整，而fontSize通常用于单个文本。

- How to scroll page in flutter?

```dart
body: SingleChildScrollView(
  child: Stack(
    children: <Widget>[],
  ),
);
```

- TextField 的 onChanged 和 Controller对比：onChanged是专门用于监听文本变化，而controller的功能却多一些，除了能监听文本变化外，它还可以设置默认值、选择文本

- 当超过 3 个 BottomNavigationBar items 的时候 底部导航栏就自动变了样式，type 改变了，解决：

```dart
bottomNavigationBar: BottomNavigationBar(
  type: BottomNavigationBarType.fixed,
)
```

- ShowDialog using children is deprecated how to use it the other way?

不使用 child 用一个 builder 构建

```dart
showDialog(
  context: context,
  builder: (context) => Text('Any widget in here')
)
```

- 获取 StatefulWidget 的 state 的方法：通过 (widget 部件的实例).of(context)可以获取父级最近的Widget的State对象，Flutter还有一种通用的获取StatefulWidget对象State的方法，通过GlobalKey来获取

- error: The argument type '_MyAppState' can't be assigned to the parameter type 'TickerProvider'.

解决：Add with TickerProviderStateMixin to the end of your State’s class declaration.

- How can show grid view with other view in single page #flutter

解决：You should just set height of the Container or warp it by Expanded widget

```dart
body:ListView(
  children: <Widget>[
    Text("checking"),
    Container(
      height: 300.0
      child: GridView.count(
        crossAxisCount: 3,
        childAspectRatio: .6,
        children: _list.map((p) => ProductManagment(p)).toList(),
      ),
    )
  ],
)
```

- async 函数需要返回一个 Future 类型

- Stack widget 报错 RenderStack object was given an infinite size during layout. This probably means that it is a render object that tries to be as big as possible, but it was put inside another render object that allows its children to pick their own size.

解决：because a Stack widget must have at least one item which can have a static size at build time，Stack 里面必须包含一个含有静态大小的 widget，可以放一个空的 Container();

- ListView.builder适合列表项比较多（或者无限）的情况，因为只有当子Widget真正显示的时候才会被创建，而默认的构造函数适合只有少量的子widget的情况，因为这种方式需要将所有children都提前创建好（这需要做大量工作），而不是等到子widget真正显示的时候再创建。

- ListView 报错：Flutter Error: RangeError (index): Invalid value: Not in range 0..2, inclusive: 3

解决: 您应该将项目计数参数传递给ListView.builder，让它知道项目计数，itemCount 参数

```dart
Widget getList() {
  List<String> list = getListItems();
  ListView myList = new ListView.builder(
    itemCount: list.length,
    itemBuilder: (context, index) {
    return new ListTile(
      title: new Text(list[index]),
    );
  });
  return myList;
}
```

- ListView scrollDirection: Axis.horizontal, 将可以水平滚动 List 列表

- AspectRatio(长宽比) 一个widget，试图将子widget的大小指定为某个特定的长宽比。这是一个比率控件，按照宽度和比率来计算高度。一般会设置父容器的宽度，然后设置AspectRatio的aspectRatio，那么AspectRatio就会按照指定比例来显示

- 想要在 Container Widget 中将图片圆角化，不能把图片也在 child 中， 而是在 decoration 中添加 image 属性：

```dart
Container(
  decoration: BoxDecoration(
    shape: BoxShape.rectangle,
    borderRadius: BorderRadius.circular(16.0),
    image: DecorationImage(
      image: AssetImage('./images.png'),
      fit: BoxFit.cover,
    )
  ),
)
```

- Error caught by rendering library, thrown during performResize()。
Vertical viewport was given unbounded height ...

解决：

1. 因为ListView高度边界无法确定引起，所以解决的办法也很明显，我们需要给ListView指定边界，我们通过SizedBox指定一个列表高度

2. 可以使用Expanded自动拉伸组件大小的Widget，Column是继承自Flex的，所以我们可以直接使用Column+Expanded来实现。

```dart
body: Column(
  children: <Widget>[
    Expanded(
      child: GridView.count(
        crossAxisCount: 2,
        children: List.generate(100, (index) {
          return Text(index.toString());
        })
      ),
    ),
  ],
),
```

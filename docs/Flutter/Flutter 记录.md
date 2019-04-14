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

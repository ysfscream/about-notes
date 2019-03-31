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
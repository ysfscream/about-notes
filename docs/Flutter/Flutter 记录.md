# Flutter 记录

## 注意

- Android Studio 第一次运行 Android 项目时，开全局代理

- 运行 `flutter packages get` 后需要重启项目

- Flutter/Dart Error: Unexpected tag 0 (Nothing) in (修改拆分了文件路径后) 错误解决：

```dart
Clicking the "Restart Debugging" fixed the issues.

I believe the problem may be related to the fact that I changed from a StatefullWidget to a StatelessWidget without restarting the debugger.
```
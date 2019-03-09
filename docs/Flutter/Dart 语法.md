# Dart 语法

https://www.jianshu.com/p/81bbd9b6605c

## 重要概念

- 能赋值给变量的所以东西都是对象，包括 numbers, null, function, 都是继承自 Object 内置类

- 尽量给变量定义一个类型，会更安全，没有显示定义类型的变量在 debug 模式下会类型会是  dynamic（动态的）

- dart 在 running 之前解析你的所有代码，指定数据类型和编译时的常量，可以提高运行速度

- dart 提供了顶级函数(如：main())

- dart 没有 public、private、protected 这些关键字，变量名以"_"开头意味着对它的 lib 是私有的

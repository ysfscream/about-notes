# Dart 语法

https://www.jianshu.com/p/81bbd9b6605c

## 重要概念

- 能赋值给变量的所以东西都是对象，包括 numbers, null, function, 都是继承自 Object 内置类

- 尽量给变量定义一个类型，会更安全，没有显示定义类型的变量在 debug 模式下会类型会是  dynamic（动态的）

- dart 在 running 之前解析你的所有代码，指定数据类型和编译时的常量，可以提高运行速度

- dart 提供了顶级函数(如：main())

- dart 没有 public、private、protected 这些关键字，变量名以"_"开头意味着对它的 lib 是私有的

### 类型转化

```dart
// String -> int
var one = int.parse('1');

// String -> double
var onePointOne = double.parse('1.1');

// int -> String
String oneAsString = 1.toString();

// double -> String 注意括号中要有小数点位数，否则报错
String piAsString = 3.14159.toStringAsFixed(2);
```

### bool

Dart 是强 bool 类型检查，只有bool 类型的值是true 才被认为是true

### list

```dart
// 使用List的构造函数，也可以添加int参数，表示List固定长度，不能进行添加 删除操作
var vegetables = new List();

// 或者简单的用List来赋值
var fruits = ['apples', 'oranges'];

// 添加元素
fruits.add('kiwis');

// 添加多个元素
fruits.addAll(['grapes', 'bananas']);

// 获取第一个元素
fruits.first;

// 获取元素最后一个元素
fruits.last;

// 查找某个元素的索引号
assert(fruits.indexOf('apples') == 0);

// 删除指定位置的元素，返回删除的元素
fruits.removeAt(index);

// 删除指定元素,成功返回true，失败返回false
fruits.remove('apples');

// 删除最后一个元素，返回删除的元素
fruits.removeLast();

// 删除指定范围元素，含头不含尾，成功返回null
fruits.removeRange(start,end);

// 删除指定条件的元素，成功返回null
fruits.removeWhere((item) => item.length >6)；

// 删除所有的元素
fruits.clear();

// sort()对元素进行排序，传入一个函数作为参数，return <0表示由小到大， >0表示由大到小
fruits.sort((a, b) => a.compareTo(b));
```

### 函数参数

函数可以有两种类型的参数：
必须的——必须的参数放在参数列表的前面。
可选的——可选的参数跟在必须的参数后面。

注：可选参数必须放在最后，通过[]来表示可选参数

```dart
String say(String from, String msg, [String device]) {
  var result = '$from says $msg';
  if (device != null) {
    result = '$result with a $device';
  }
  return result;
}
```

还可以设置默认

```dart
void person(int age = 18, String name) {
  print(age, name)
}
```

### 运算符

除了常见的，还有如下运算符：

- is 运算符，a is b，用于判断 a 对象是否是 b 类的实例，返回 bool 值

- is！意义与上面相反

- as 运算符；用于检查类型

- ??= 运算符

```dart
b ??= value; // 如果 b 为空，把 value 赋值给 b;
            // 否则，b 不变
```

- ?? 运算符

```dart
String toString() => msg ?? super.toString();
//如果 msg 不为空，返回 msg；否则返回后面的
```

```dart
// .. 运算符，把对同一对象的不同操作串联起来
final addressBook = (new AddressBookBuilder()
    ..name = 'jenny'
    ..email = 'jenny@example.com'
    ..phone = (new PhoneNumberBuilder()
          ..number = '415-555-0100'
          ..label = 'home')
        .build()).build();
```
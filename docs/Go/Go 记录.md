# Go 记录

## import

- 点操作 我们有时候会看到如下的方式导入包

```go
import(
  . "fmt"
)
```

这个点操作的含义就是这个包导入之后在你调用这个包的函数时，你可以省略前缀的包名，也就是前面你调

用的 `fmt.Println("hello world")` 可以省略的写成 `Println("hello world")`

- 别名操作 别名操作顾名思义我们可以把包命名成另一个我们用起来容易记忆的名字

```go
import(
  f "fmt"
)
```

别名操作的话调用包函数时前缀变成了我们的前缀，即`f.Println("hello world")`

- `_`操作 这个操作经常是让很多人费解的一个操作符，请看下面这个import

```go
import (
  "database/sql"
  _ "github.com/ziutek/mymysql/godrv"
)
```

_操作其实是引入该包，而不直接使用包里面的函数，而是调用了该包里面的init函数

## CLI

多个命令源码文件虽然可以分开单独 go run 运行起来，但是无法通过 go build 和 go install

同理，如果命令源码文件和库源码文件也会出现这样的问题，库源码文件不能通过 go build 和 go install 这种常规的方法编译和安装

所以命令源码文件应该是被单独放在一个代码包中。

### 命令源码文件和库源码文件

命令源码文件是可以单独运行的。可以使用 go run 命令直接运行，也可以通过 go build 或 go install 命令得到相应的可执行文件。所以命令源码文件是可以在机器的任何目录下运行的。

比如平时我们在 LeetCode 上刷算法题，这时候写的就是一个程序，这就是命令源码文件，可以在电脑的任意一个文件夹新建一个 go 文件就可以开始刷题了，写完就可以运行，对比执行结果，答案对了就可以提交代码。

但是公司项目里面的代码就不能这样了，只能存放在 GOPATH 目录下。因为公司项目不可能只有命令源码文件的，肯定是包含库源码文件，甚至包含测试源码文件的。

### fmt

使用go fmt命令，更多时候是用gofmt，而且需要参数-w，否则格式化结果不会写入文件。gofmt -w src，可以格式化整个项目。

## 语法

### 变量

```go
name := value
var a int = 10
var b = 10
c : = 10
```

>这种方式它只能被用在函数体内，而不可以用于全局变量的声明与赋值

第一种，以逗号分隔，声明与赋值分开，若不赋值，存在默认值

```go
var name1, name2, name3 type
name1, name2, name3 = v1, v2, v3
```

第二种，直接赋值，下面的变量类型可以是不同的类型

```go
var name1, name2, name3 = v1, v2, v3
```

第三种，集合类型

```go
var (
    name1 type1
    name2 type2
)
```

简短定义方式，不能定义全局变量。
变量的零值。也叫默认值。
变量定义了就要使用，否则无法通过编译。

### 常量

常量可以作为枚举，常量组

```go
const (
    Unknown = 0
    Female = 1
    Male = 2
)
```

### iota

iota，特殊常量，可以认为是一个可以被编译器修改的常量

iota 可以被用作枚举值：

```go
const (
    a = iota
    b = iota
    c = iota
)
```

第一个 iota 等于 0，每当 iota 在新的一行被使用时，它的值都会自动加 1；所以 a=0, b=1, c=2 可以简写为如下形式：

```go
const (
    a = iota
    b
    c
)
```

如果中断iota自增，则必须显式恢复。且后续自增值按行序递增

自增默认是int类型，可以自行进行显示指定类型

```go
package main

import "fmt"

func main() {
    const (
        a = iota   //0
        b          //1
        c          //2
        d = "ha"   //独立值，iota += 1
        e          //"ha"   iota += 1
        f = 100    //iota +=1
        g          //100  iota +=1
        h = iota   //7,恢复计数
        i          //8
    )
    fmt.Println(a,b,c,d,e,f,g,h,i)
}
```

结果：

`0 1 2 ha ha 100 100 7 8`

### 数组

声明和初始化数组，需要指明数组的大小和存储的数据类型，数组一旦定义后，大小不能更改。

数组是值类型 Go中的数组是值类型，而不是引用类型。这意味着当它们被分配给一个新变量时，将把原始数组的副本分配给新变量。如果对新变量进行了更改，则不会在原始数组中反映。

```go
var variable_name [SIZE] variable_type
variable_name := [size]variable_type{values}
```

```go
var balance [10] float32
var balance = [5]float32{1000.0, 2.0, 3.4, 7.0, 50.0}
```

初始化数组中 {} 中的元素个数不能大于 [] 中的数字。 如果忽略 [] 中的数字不设置数组大小，Go 语言会根据元素的个数来设置数组的大小

```go
var balance = []float32{1000.0, 2.0, 3.4, 7.0, 50.0}
```

### 切片

```go
s :=[] int {1,2,3 }
```

```go
s := arr[startIndex:endIndex]
```

将arr中从下标startIndex到endIndex-1 下的元素创建为一个新的切片（前闭后开），长度为endIndex-startIndex

```go
s := arr[startIndex:]
```

缺省endIndex时将表示一直到arr的最后一个元素

```go
s := arr[:endIndex]
```

缺省startIndex时将表示从arr的第一个元素开始

**修改切片后的数据，原数组数据也将被更改**。

但是 `copy` 方法是不会建立两个切片的联系的。

len() 方法获取长度 切片提供了计算容量的方法 cap() 可以测量切片最长可以达到多少

### Map

```go
rating := map[string]float32 {"C":5, "Go":4.5, "Python":4.5, "C++":2 }

var countryCapitalMap map[string]string
/* 创建集合 */
countryCapitalMap = make(map[string]string)
countryCapitalMap["China"] = "Beijing"
```

delete(map, key) 函数用于删除集合的元素

```go
delete(countryCapitalMap, "Japan")
```

我们可以通过key获取map中对应的value值。但是当key如果不存在的时候，我们会得到该value值类型的默认值，比如string类型得到空字符串，int类型得到0。但是程序不会报错。

使用ok-idiom获取值，可知道key/value是否存在

```go
value, ok := map[key]

one, ok := countryCapitalMap["India"]
two, ok := countryCapitalMap["Japan"]

// New Delhi true
// '' false
```

map是引用类型的
与切片相似，映射是引用类型。当将映射分配给一个新变量时，它们都指向相同的内部数据结构。因此，一个的变化会反映另一个。

## 数据类型

### 基本数据类型

- bool

- Numeric Types
  - int8, int16, int32, int64, int
  - uint8, uint16, uint32, uint64, uint
  - float32, float64
  - complex64, complex128
  - byte
  - rune

- string

### 复合类型(派生类型)

1、指针类型（Pointer） 2、数组类型 3、结构化类型(struct) 4、Channel 类型 5、函数类型 6、切片类型 7、接口类型（interface） 8、Map 类型

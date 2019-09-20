# Rust 基础概念

## special format

```rust
println!("Hello, world!");

// In general, the `{}` will be automatically replaced with any
// arguments. These will be stringified.
println!("{} days", 31);

// Without a suffix, 31 becomes an i32. You can change what type 31 is by providing a suffix.
// There are various optional patterns this works with. Positional arguments can be used.
println!("{0} love {1}", "I", "you");

// As can named arguments.
println!("{subject}?", subject="Who are you");

// Special formatting can be specified after a `:`.
println!("{} of {:b} people know binary, the other half doesn't", 1, 2);

// You can right-align text with a specified width. This will output
// "     6". 20 white spaces and a "6".
println!("{number:>width$}", number="6", width=20);
// You can pad numbers with extra zeroes. This will output "000001".
println!("{number:>0width$}", number=6, width=20);

// Rust even checks to make sure the correct number of arguments are used.
// println!("My name is {0}, {1} {0}", "Bond");
```

## 变量，常量和隐藏

在 Rust 中，变量默认是不可变的，用 let 声明，使用 mut 来使一个变量可变。

```rust
let num = 5; // 不可变
let mut num = 5; // 可变
```

```rust
let mut guess = String::new();

let guess: u32 = guess.trim().parse().expect("please type the number!");
```

这里创建了一个叫做 guess 的变量。虽然已经有了一个叫做 guess 的变量，但是 Rust 允许用一个新值来 隐藏 （shadow） guess 之前的值。这个功能常用在需要转换值类型之类的场景。它允许我们复用 guess 变量的名字，而不是被迫创建两个不同变量，诸如 guess_str 和 guess 之类。

这是一个声明常量的例子，它的名称是 MAX_POINTS，值是 100,000。（Rust 常量的命名规范是使用下划线分隔的大写字母单词，并且可以在数字字面值中插入下划线来提升可读性）

```rust
const MAX_POINT: u32 = 100_000;
```

我们可以定义一个与之前变量同名的新变量，而新变量会 隐藏 之前的变量。Rustacean 们称之为第一个变量被第二个 隐藏 了，这意味着使用这个变量时会看到第二个值。可以用相同变量名称来隐藏一个变量，以及重复使用 let 关键字来多次隐藏，

```rust
fn main() {
    let x = 5;

    let x = x + 1;

    let x = x * 2;

    println!("The value of x is: {}", x);
}
```

- 不报错

```rust
let spaces = "   ";
let spaces = spaces.len();
```

- 报错了

```rust
let mut spaces = "   ";
spaces = spaces.len();
```

使用了 mut 就不可以改变变量的值类型

## crate

> 记住，crate 是一个 Rust 代码包。我们正在构建的项目是一个 二进制 crate，它生成一个可执行文件。 rand crate 是一个 库 crate，库 crate 可以包含任意能被其他程序使用的代码。

其实就是 rust 依赖的库文件

```toml
[dependencies]
ferris-says = "0.1"
```

```rust
use ferris_says::say;
```

这样就可以使用 ferris-says crate 中导出的 say 函数了。

**注意**：你不可能凭空就知道应该 use 哪个 trait 以及该从 crate 中调用哪个方法。crate 的使用说明位于其文档中。Cargo 有一个很棒的功能是：运行 `cargo doc --open` 命令来构建所有本地依赖提供的文档，并在浏览器中打开。例如，假设你对 rand crate 中的其他功能感兴趣，你可以运行 `cargo doc --open` 并点击左侧导航栏中的 rand。

## 类型

- 32 位数字 i32；32 位无符号数字 u32；64 位数字 i64 等等。Rust 默认使用 i32

- u32 只能由数字字符转换

标量（scalar）类型代表一个单独的值。Rust 有四种基本的标量类型：整型、浮点型、布尔类型和字符类型。

### 整型

|长度|有符号|无符号|
|-|-|-|
|8-bit|i8|u8|
|16-bit|i16|u16|
|32-bit|i32|u32|
|64-bit|i64|u64|
|arch|isize|usize|

f32 是单精度浮点数，f64 是双精度浮点数

### 浮点型

Rust 也有两个原生的 浮点数（floating-point numbers）类型，它们是带小数点的数字。Rust 的浮点数类型是 f32 和 f64，分别占 32 位和 64 位。默认类型是 f64，因为在现代 CPU 中，它与 f32 速度几乎一样，不过精度更高。

### 布尔型

Rust 中的布尔类型使用 bool 表示

```rust
fn main() {
    let t = true;

    let f: bool = false; // 显式指定类型注解
}
```

### 字符类型

Rust 的 char 类型是语言中最原生的字母类型。（注意 char 由单引号指定，不同于字符串使用双引号。）

Rust 有两个原生的复合类型：元组（tuple）和数组（array）。'

```rust
fn main() {
    let c = 'z';
    let z = 'ℤ';
    let heart_eyed_cat = '😻';
}
```

### 元组类型

元组是一个将多个其他类型的值组合进一个复合类型的主要方式。

```rust
let tup: (i32, f64, u8) = (500, 6.4, 1);
```

可以解构

```rust
let tup = (500, 6.4, 1);

let (x, y, z) = tup;

println!("The value of y is: {}", y); // 6.4

tup.0 // 500
```

### 数组类型

另一个包含多个值的方式是 数组（array）。与元组不同，数组中的每个元素的类型必须相同。Rust 中的数组与一些其他语言中的数组不同，因为 Rust 中的数组是固定长度的：一旦声明，它们的长度不能增长或缩小。

想要改变可以使用 vector 类型，它是标准库提供的一个 允许 增长和缩小长度的类似数组的集合类型。

数组的类型：[type; number]，[值类型, 数组的长度]

```rust
let a = [1, 2, 3, 4, 5];
let a: [i32; 5] = [1, 2, 3, 4, 5];
```

## 关键词

### match

一个 `match` 表达式由 分支（arms） 构成。一个分支包含一个 模式（pattern）和表达式开头的值与分支模式相匹配时应该执行的代码。Rust 获取提供给 match 的值并挨个检查每个分支的模式。match 结构和模式是 Rust 中强大的功能，它体现了代码可能遇到的多种情形，并帮助你确保没有遗漏处理

```rust
use::std::cmp::Ordering;

// 比较 number1 和 number2
match number1.cmp(&number2) {
    Ordering::Greater => println!("Too Big"),
    Ordering::Equal => println!("Too small"),
    Ordering::Less => println!("Too Small"),
};
```

### loop

loop 关键字创建了一个无限循环。

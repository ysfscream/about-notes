# TS 基础

> TypeScript 具备动态检查特征，编译期也具备静
态检查操作；具备弱类型特征，也存在强类型约束。

- JavaScript ⽆编译期，故为动态类型
- Java 编译期会暴露 FB(Forbidden Behaviors)，故为静态类型

## 基本类型

```typescript
// 基本
let isDone: boolean = false; // Boolean
let decimal: number = 6; // Number
let color: string = "blue"; // String
let list: number[] = [1, 2, 3]; // Array
let x: [string, number]; // Tuple
enum Color {Red, Green, Blue} // Enum
function warnUser(): void { // Void
 console.warn("This is my warning message");
}
class Animal { type = 1 } // Class

// 渐进
function NumToString(value: string, padding: any): String {
  return `${value} is a string and pading is ${typeof padding ==='number' ? padding + 'px' : padding}`
}

// 结构定型
interface valueDict: { value: Number }

function printValue(val: valueDict) {
  return valueDict.value
}

printValue({ value: 10 }) // 10

// 约束函数⼊参和返回（泛型）
type myType = string | number;
function loggingIdentity<T extends myType>(arg: T[]): T[] {
 console.log(arg.length);
 return arg;
}
loggingIdentity([1, 2, 'str']);
// Error: Type '{}' is not assignable to type 'string | number'.
loggingIdentity([1, 2, {}]);
// ====== Complex Generic ======
function getProperty<T, K extends keyof T>(obj: T, key: K) {
 return obj[key];
}

// 约束类成员和⽅法（泛型）
class Queue<T> {
 private data :T[] = [];
 push = (item: T) => this.data.push(item);
 pop = (): T | undefined => this.data.shift();
}
const queue = new Queue<number>();
queue.push(0);
queue.push('1'); // Error：不能推⼊⼀个 `string`，只有 number 类型被允许
```

## 全局变量的声明

### 全局变量的声明文件主要有以下几种语法

- `declare var` 声明全局变量
- `declare function` 声明全局方法
- `declare class` 声明全局类
- `declare enum` 声明全局枚举类型
- `declare namespace` 声明（含有子属性的）全局对象
- `interface` 和 `type` 声明全局类型

> 需要注意的是，声明语句中只能定义类型，切勿在声明语句中定义具体的实现

### namespace

随着 ES6 的广泛应用，现在已经不建议再使用 ts 中的 namespace，而推荐使用 ES6 的模块化方案了，故我们不再需要学习 namespace 的使用了。但是在声明文件中，declare namespace 还是比较常用的，它用来表示全局变量是一个对象，包含很多子属性。

比如 jQuery 是一个全局变量，它是一个对象，提供了一个 jQuery.ajax 方法可以调用，那么我们就应该使用 declare namespace jQuery 来声明这个拥有多个子属性的全局变量。

```typescript
// src/jQuery.d.ts

declare namespace jQuery {
  function ajax(url: string, settings?: any): void;
}
```

#### 防止命名冲突

暴露在最外层的 interface 或 type 会作为全局类型作用于整个项目中，我们应该尽可能的减少全局变量或全局类型的数量。故最好将他们放到 namespace 下13：

```typescript
// src/jQuery.d.ts

declare namespace jQuery {
    interface AjaxSettings {
        method?: 'GET' | 'POST'
        data?: any;
    }
    function ajax(url: string, settings?: AjaxSettings): void;
}
```

注意，在使用这个 interface 的时候，也应该加上 jQuery 前缀：

```typescript
// src/index.ts

let settings: jQuery.AjaxSettings = {
    method: 'POST',
    data: {
        name: 'foo'
    }
};
jQuery.ajax('/api/post_something', settings);
```

### 类型导出

只有 function、class 和 interface 可以直接默认导出，其他的变量需要先定义出来，再默认导出

export default enum 是错误的语法，需要使用 declare enum 定义出来，然后使用 export default

```typescript
// types/foo/index.d.ts

declare enum Directions {
  Up,
  Down,
  Left,
  Right
}

export default Directions;
```

### 类型断言

类型断言（Type Assertion）可以用来手动指定一个值的类型。

语法

`<类型>值`

或

`值 as 类型`

作用是当多个联合的类型声明时，将一个联合类型的变量指定为一个更加具体的类型

```typescript
function greet(name: string | number): string {
  // return name as string
  return <string>name
}
```

### 泛型

约束中也可以用到其他的类型参数或使用多个类型参数，在下面的代码中我们限制类型参数 K 必须是 obj 的一个属性名：

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
```

除了在函数上使用泛型之外，我们还可以定义泛型类型：

```typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
}
```

当定义泛型类型时我们实际上是在定义一种处理类型的「函数」，使用泛型参数去生成新的类型，这也被称作「元编程」。例如 Partial 会遍历传入类型 T 的每一个属性，返回一个所有属性都可空的新类型：

```typescript
interface Person {
  name: string
}

const a: Person = {} // 报错 Property 'name' is missing in type '{}' but required in type 'Person'.
const b: Partial<Person> = {}
```

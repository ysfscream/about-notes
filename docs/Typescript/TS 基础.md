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
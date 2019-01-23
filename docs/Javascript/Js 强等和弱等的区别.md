# Js 强等和弱等的区别

三个等号 `===` 表示严格相等，也就是说类型和值都必须相同。两个等号 `==` 会使其中一边的类型进行强制转换，使等号两边的类型都相等后再对数值进行比较。

尽量使用 === 严格相等

| x                 | y                 | ==    | ===   | Object.is |
| ----------------- | ----------------- | ----- | ----- | --------- |
| undefined         | undefined         | true  | true  | true      |
| null              | null              | true  | true  | true      |
| true              | true              | true  | true  | true      |
| false             | false             | true  | true  | true      |
| "foo"             | "foo"             | true  | true  | true      |
| {foo: "bar"}      | x                 | true  | true  | true      |
| 0                 | 0                 | true  | true  | true      |
| +0                | -0                | true  | true  | false     |
| 0                 | false             | true  | false | false     |
| ""                | false             | true  | false | false     |
| ""                | 0                 | true  | false | false     |
| "0"               | 0                 | true  | false | false     |
| "17"              | 17                | true  | false | false     |
| [1,2]             | "1,2"             | true  | false | false     |
| new String("foo") | "foo"             | true  | false | false     |
| null              | undefined         | true  | false | false     |
| null              | false             | false | false | false     |
| undefined         | false             | false | false | false     |
| {foo: "bar"}      | {foo: "bar"}      | false | false | false     |
| new String("foo") | new String("foo") | false | false | false     |
| 0                 | null              | false | false | false     |
| 0                 | NaN               | false | false | false     |
| "foo"             | NaN               | false | false | false     |
| NaN               | NaN               | false | false | true      |

作者：Vanessa

链接：https://hacpai.com/article/1546570870626

来源：黑客派

协议：CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0/
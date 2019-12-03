# TS 版本特性

## 3.7.7

- Optional Chaining 可选链

从本质上讲，可选链接使我们可以编写代码，如果遇到 null 或未定义，TypeScript可以立即停止运行某些表达式。用于可选属性访问的运算符。

Before:

```javascript
if (foo) {
  if (foo.bar) {
    foo.bar.baz()
  }
}
if (foo && foo.bar && foo.bar.baz) {
    // ...
}
```

After:

```typescript
let x = foo?.bar.baz();

if (foo?.bar?.baz) {
    // ...
}
```

- Nullish Coalescing 空值合并

?? 运算符可以在处理 null 或 undefined 时“回退”到一个默认值上。

Before:

```javascript
let x = (foo !== null && foo !== undefined) ?
    foo :
    bar();
```

After:

```typescript
let x = foo ?? bar();
```

?? 运算符可以代替 ||

因为用 || 时，可能出现等于 0 或者 '' 也为 false 的情况

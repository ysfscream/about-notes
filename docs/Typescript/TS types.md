# TS types

## 普通属性

```javascript
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};
```

定义的变量比接口少了一些属性，多一些属性也是不允许的。

## 可选属性

有时我们希望不要完全匹配一个形状，那么可以用可选属性：

```javascript
interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom'
};
```

## 任意属性

有时候我们希望一个接口允许有任意的属性，可以使用如下方式：

```javascript
interface Person {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    name: 'Tom',
    gender: 'male'
};
```

使用 [propName: string] 定义了任意属性取 string 类型的值。
需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集。

## 类型别名

用来给一个类型起个新名字。

```typescript
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
```

## 字符串字面量类型

```typescript
type Name = 'Bob' | 'Joy';

const HisName: Name = 'Lucy';
// Type Error, must be Bob or Joy
// Type '"Lucy"' is not assignable to type 'Name'.
```

#  Js 一些有用的数组和对象的方法



##  str.substr

```js
var str = "abcdefghij";

console.log(str.charAt[0]) //输出首字母a

console.log("(1,2): "    + str.substr(1,2));   // (1,2): bc
console.log("(-3,2): "   + str.substr(-3,2));  // (-3,2): hi
console.log("(-3): "     + str.substr(-3));    // (-3): hij
console.log("(1): "      + str.substr(1));     // (1): bcdefghij
console.log("(-20, 2): " + str.substr(-20,2)); // (-20, 2): ab
console.log("(20, 2): "  + str.substr(20,2));  // (20, 2): 
```



## find 和 filter

> `find()`方法返回数组中满足提供的测试函数的第一个元素的值。否则返回undefined

```js
var arr = [1, 2, 3, 4, 5, 6]
var sum = arr.find(i => i === 5) // num的值为5
```

> `filter()`方法对数组中每个元素执行一次指定的函数，过滤筛选出函数内满足的条件的值，创建一个新的数组，返回的是一个数组，会循环遍历一遍整个数组

```js
var arr = [1, 2, 3, 4, 5, 6]
var sum = arr.filter(i => i > 3) 
// num的值为[4, 5, 6]
```



## some 和 every

> `some()`对数组中的每个元素执行一次特定函数，直到返回true，如果发现这个元素，将返回true，用于判断数组元素内有没有特定函数中满足条件的元素

```js
var arr = [2, 5, 8, 1, 4]
var res = arr.some(i => i > 10) //返回false
var res = arr.some(i => i > 5)  //返回true
```

> `every()`对数组中的每个元素都执行一次指定的函数，直到此函数返回false，如果存在返回false，当数组内的每一个元素都满足特定函数时，将返回true

```js
var arr = [2, 5, 8, 1, 4]
var res = arr.every(i => i > 5) //返回false
var res = arr.every(i => i > 1)  //返回true
```



## reduce

> `reduce()`接受两个参数 用于操作数组内前后两个值得操作 得到一个新的值

```js
const arr = [1, 2, 3, 4, 5]
arr.reduce((first, second) => first + second}) 
//输出 15
```



## forEach

> 两个方法都是循环遍历数组里的元素 https://www.zhihu.com/question/24927450

- `forEach` 是对数组里的每个元素进行回调函数操作 对每个元素进行一些操作 不反回新数组

  ```js
  var arr = [1, 2, 3, 4]
  var doubled = arr.forEach((num, index) => {
      return arr[index] = num * 2
  }) 
  
  console.log(arr) // [1, 4, 9, 16]
  console.log(doubled) // undefined
  ```

- `map` 遍历每个数组里的元素 对每个元素执行操作 返回到一个新数组中

  ```js
  var arr = [1, 2, 3, 4]
  var doubled = arr.map((num） => {
      return num * 2
  }) 
  
  console.log(arr) // [1, 2, 3, 4] 对原数组不改变
  console.log(doubled) // [1, 4, 9, 16]
  ```

  map 比 forEach 更快



## includes

> includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。

```js
var array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
```



## Array.from

> Array.from 方法从一个类似数组或可迭代对象中创建一个新的数组实例。

```js
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

### 数组去重合并

```js
function combine(){ 
    let arr = [].concat.apply([], arguments);  //没有去重复的新数组 
    return Array.from(new Set(arr));
} 

var m = [1, 2, 2], n = [2,3,3]; 
console.log(combine(m,n));                     // [1, 2, 3]
```



## Object.keys 和 Object.values

> Object.keys() 方法会返回一个由一个给定**对象**的自身可枚举属性组成的**数组**，数组中属性名的排列顺序和使用 [`for...in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环遍历该对象时返回的顺序一致 （两者的主要区别是 一个 for-in 循环还会枚举其原型链上的属性）。

```js
var obj = {
	'a': 1,
	'b': 2,
	'c': 3
}
Object.keys(obj) //输出['a', 'b', 'c']
```

```js
/* Array 对象 */ 
let arr = ["a", "b", "c"];
console.log(Object.keys(arr)); 
// ['0', '1', '2']

/* Object 对象 */ 
let obj = { foo: "bar", baz: 42 }, 
    keys = Object.keys(obj);
// CCAC: Chrome Console Auto Copy
copy(keys); 
// ["foo","baz"]
注意：
var obj = { 0:"a", 1:"b", 2:{3:"c", 4:"d"}};
console.log(Object.keys(obj));
// (3) ["0", "1", "2"]

// 类数组 对象, 随机 key 排序 
let anObj = { 100: 'a', 2: 'b', 7: 'c' }; 

console.log(Object.keys(anObj)); 
// ['2', '7', '100']
```

> Object.values()方法返回一个给定对象自己的所有可枚举属性值的数组，值的顺序与使用[`for...in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。

```js
ar obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// 类数组对象
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']
注意：
var obj = { 0: 'a', 1: 'b', 2: { 3: 'c' , 4: 'd' } };
console.log(Object.values(obj));  
// ["a", "b", {…}] 内置的对象没有扩展成数组

// 随机键值的类数组对象
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

```



## Object.freeze 和 Object.seal

>  Prevents you from modifying existing object properties or adding new properties and values to an object. It’s often what people think `const` does, however `const` allows you to modify an object.

```js
const frozenObject = {
  name: 'Robert'
}

Object.freeze(frozenObject);

frozenObject.name = 'Henry';
// frozenObject will be equal to { name: 'Robert' }
```

> Stops any new properties from being added to an object, but still allows for existing properties to be changed.

```js
const sealedObject = {
  name: 'Robert'
}

Object.seal(sealedObject);

sealedObject.name = 'Bob';
sealedObject.wearsWatch = true;
// sealedObject will be equal to { name: 'Bob' }
```



## Object.defineProperty

> `Object.defineProperty()` 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。默认情况下，使用 `Object.defineProperty()` 添加的属性值是不可修改的。

```js
Object.defineProperty(obj, prop, descriptor)
```

obj：要在其上定义属性的对象

prop：要定义或者修改的属性的名称

description：将被定义或修改的属性描述 

​	数据描述符和存取描述符均具有以下可选键值：

- `configurable`

  当且仅当该属性的 configurable 为 true 时，该属性`描述符`才能够被改变，同时该属性也能从对应的对象上被删除。**默认为 false**。

- `enumerable`

  当且仅当该属性的`enumerable`为`true`时，该属性才能够出现在对象的枚举属性中。**默认为 false**。

**数据描述符同时具有以下可选键值**：

- `value`

  该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。**默认为 undefined**。

- `writable`

  当且仅当该属性的`writable`为`true`时，`value`才能被[赋值运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)改变。**默认为 false**。

**存取描述符同时具有以下可选键值**：

- `get`

  一旦目标对象访问该属性，就会调用这个方法，并返回结果。

  一个给属性提供 getter 的方法，如果没有 getter 则为 `undefined`。当访问该属性时，该方法会被执行，方法执行时没有参数传入，但是会传入`this`对象（由于继承关系，这里的`this`并不一定是定义该属性的对象）。

  **默认为 undefined**。

- `set`

  一旦目标对象设置该属性，就会调用这个方法。

  一个给属性提供 setter 的方法，如果没有 setter 则为 `undefined`。当属性值修改时，触发执行该方法。该方法将接受唯一参数，即该属性新的参数值。

  **默认为 undefined**。

```js
let obj = {}
Object.defineProperty(obj, 'key', {value: 10})
console.log(obj) // {key: 10}
```

setter 和 getter 的用法

```js
let obj = {}
let value = 1
Object.defineProperty(obj, 'prop', {
	get: function() {
		console.log('get')
		return value
	},
	set(newValue) {
		console.log('set')
		value = newValue
	}
})
console.log(obj.prop)
obj.prop = 2
console.log(obj.prop)
```

打印输出

'get', 1, 'set', 'get', 2 



## hasOwnProperty

> `hasOwnProperty()` 方法会返回一个布尔值，指示对象**自身**属性中是否具有指定的属性

```js
const obj = { a: 1 }

obj.hasOwnProperty('a') // true

obj.hasOwnProperty('b') // false
```



## Map 和 Set

> JavaScript的默认对象表示方式`{}`可以视为其他语言中的`Map`或`Dictionary`的数据结构，即一组键值对。
>
> 但是JavaScript的对象有个小问题，就是键必须是字符串。但实际上Number或者其他数据类型作为键也是非常合理的。
>
> 为了解决这个问题，最新的ES6规范引入了新的数据类型`Map`

### Map

是一组键值对的结构，具有极快的查找速度。如果用 `Map` 进行键值对查询，无论表有多大，查找速度都不会变慢。

```js
var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
m.get('Michael'); // 95
```

初始化`Map`需要一个二维数组，或者直接初始化一个空`Map`。`Map`具有以下方法：

```js
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined
```

由于一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值冲掉：

```js
var m = new Map();
m.set('Adam', 67);
m.set('Adam', 88);
m.get('Adam'); // 88
```

### Set

`Set`和`Map`类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在`Set`中，没有重复的key。

要创建一个`Set`，需要提供一个`Array`作为输入，或者直接创建一个空`Set`：

```js
var s1 = new Set(); // 空Set
var s2 = new Set([1, 2, 3]); // 含1, 2, 3
```

重复元素在`Set`中自动被过滤：

```js
var s = new Set([1, 2, 3, 3, '3']);
s; // Set {1, 2, 3, "3"}
```

注意数字`3`和字符串`'3'`是不同的元素。

通过`add(key)`方法可以添加元素到`Set`中，可以重复添加，但不会有效果：

```js
s.add(4);
s; // Set {1, 2, 3, 4}
s.add(4);
s; // 仍然是 Set {1, 2, 3, 4}
```

通过`delete(key)`方法可以删除元素：

```js
var s = new Set([1, 2, 3]);
s; // Set {1, 2, 3}
s.delete(3);
s; // Set {1, 2}
```


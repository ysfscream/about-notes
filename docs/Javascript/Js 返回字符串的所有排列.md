# Js 返回字符串的所有排列

```js
const anagrams = (str) => { // 求出所有的排列组合
    if (str.length <= 2) {
        return str.length === 2 ? [str, str[1] + str[0]] : [str];
    } else{
        return str.split('').reduce((acc, letter, i) =>
                                    acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
    }
};
```

# Js map 和 forEach

> 两个方法都是循环遍历数组里的元素 https://www.zhihu.com/question/24927450

- `forEach` 是对数组里的每个元素进行回调函数操作 对每个元素进行一些操作 不反回新数组

    ```Js
    var arr = [1, 2, 3, 4]
    var doubled = arr.forEach((num, index) => {
        return arr[index] = num * 2
    }) 
    
    console.log(arr) // [1, 4, 9, 16]
    console.log(doubled) // undefined
    ```

- `map` 遍历每个数组里的元素 对每个元素执行操作 返回到一个新数组中

    ```Js
    var arr = [1, 2, 3, 4]
    var doubled = arr.map((num） => {
        return num * 2
    }) 
    
    console.log(arr) // [1, 2, 3, 4] 对原数组不改变
    console.log(doubled) // [1, 4, 9, 16]
    ```
    
    map 比 forEach 更快


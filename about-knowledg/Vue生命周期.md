##Vue的生命周期

###官方文档解释

![No IMG](https://cn.vuejs.org/images/lifecycle.png)

###生命周期函数

1. `beforeCreate` : 实例创建前 此时的 $el 和 data 都为 undefined 没有进行初始化
2. `created` : 实例创建后 data 初始化了 但是 $el 没有初始化 数据并没有在DOM上渲染
3. `beforeMount` : 挂载之前 data 和 $el 都初始化了 相关的 render 函数首次被调用
4. `mounted` : Vue实例挂载完成 挂载到 el 相关的DOM节点 实例的数据在 DOM 节点上进行渲染
5. `beforeUpdata` : 数据更新时调用 但不进行 DOM 重新渲染 在没渲染之前 可以在这个函数内进行状态操作
6. `updata` : 数据更新时 此时 DOM 已经进行了重新渲染 当实例每次进行数据更新时 都会调用此函数
7. `beforeDestory` : 实例销毁之前调用
8. `destory` : 实例销毁后调用 Vue实例所指示的所有东西 都将解绑

###一般在真实应用场景下的应用

 1. `created` : Ajax 请求异步数据时的获取 初始化数据
 2. `mounted` : 挂载元素内DOM节点的获取
 3. `nextTick` : 针对单一事件更新数据后立即操作dom
 4. `updated` : 任何数据的更新，如果要做统一的业务逻辑处理
 5. `watch` : 监听具体数据变化，并做相应的处理 
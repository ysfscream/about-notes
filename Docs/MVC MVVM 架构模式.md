## MVC MVVM 架构模式

### MVC模式

>MVC (Model(模型) -- Controller(控制器) -- View(视图))

* Controller 负责转发请求 对请求进行处理（业务逻辑）
* View 界面图形设计 （用户界面）
* Model 程序对应有的功能（实现的算法）数据的存储 包括对数据库的连接存储的数据 （数据保存）

```
1.View 向 Controller 发送指令
2.Controller 完成业务逻辑之后 要求Model改变状态
3.Model 将新的数据发送到 View 用户得到反馈
```
**优点：视图控制模型分离 各模块间耦合性低 提高代码重用性，开发效率，便于开发之间的合作**

**缺点：运行效率相对较低（尤其对于小项目） 控制和视图有时联系过于紧密 没有实现真的分离和重用**

### MVVM

>MVVM (Model(模型) -- View（视图） -- ViewModel（模型视图）采用数据的双向绑定)

* Model 定义数据的修改和操作的业务逻辑
* View 代表UI组件 将数据转换为UI组件的方式展现出来
* ViewModel 同步View和Model的对象

```
1.View 和 Model 没有直接联系 直接解耦 通过 ViewModel 联系
2.因此 View 的数据的变化会同步到Model中，而 Model 数据的变化也会立即反应到View 上
```

**优点：便于测试 可以直接测试ViewModel层里 低耦合 可重用性高（专注于ViewModel层里的业务逻辑）**

**缺点：大型项目中 数据在ViewModel层中过于庞大 难以调用处理等**















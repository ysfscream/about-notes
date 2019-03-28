# Flutter 概念

## 结构

以默认创建的 demo 为例子

- MyApp类代表Flutter应用，它继承了 StatelessWidget类，这也就意味着应用本身也是一个widget。

- 在Flutter中，大多数东西都是widget，包括对齐(alignment)、填充(padding)和布局(layout)。

- Flutter在构建页面时，会调用组件的build方法，widget的主要工作是提供一个build()方法来描述如何构建UI界面（通常是通过组合、拼装其它基础widget）。

- MaterialApp 是Material库中提供的Flutter APP框架，通过它可以设置应用的名称、主题、语言、首页及路由列表等。MaterialApp也是一个widget。

- Scaffold 是Material库中提供的页面脚手架，它包含导航栏和Body以及FloatingActionButton（如果需要的话）。 路由默认都是通过Scaffold创建。

- home 为Flutter应用的首页，它也是一个widget。

## widget

- Widget实际上就是Element的配置数据，Widget树实际上是一个配置树，而真正的UI渲染树是由Element构成；不过，由于Element是通过Widget生成，所以它们之间有对应关系，所以在大多数场景，我们可以宽泛地认为Widget树就是指UI控件树或UI渲染树。
- 一个Widget对象可以对应多个Element对象。这很好理解，根据同一份配置（Widget），可以创建多个实例（Element）。

## 路由

## Stateful 和Stateless 不同：

- Stateful widget可以拥有状态，这些状态在widget生命周期中是可以变的，而Stateless widget是不可变的。

- Stateful widget至少由两个类组成：

  - 一个StatefulWidget类。
  - 一个 State类； StatefulWidget类本身是不变的，但是 State类中持有的状态在widget生命周期中可能会发生变化。
_MyHomePageState类是MyHomePage类对应的状态类。和MyApp 类不同， MyHomePage类中并没有build方法，取而代之的是，build方法被挪到了_MyHomePageState方法中

一个StatefulWidget类会对应一个State类，State表示与其对应的StatefulWidget要维护的状态，State中的保存的状态信息可以：

- 在widget build时可以被同步读取。
在widget生命周期中可以被改变，当State被改变时，可以手动调用其setState()方法通知Flutter framework状态发生改变，Flutter framework在收到消息后，会重新调用其build方法重新构建widget树，从而达到更新UI的目的。
State中有两个常用属性：

- widget，它表示与该State实例关联的widget实例，由Flutter framework动态设置。注意，这种关联并非永久的，因为在应用声明周期中，UI树上的某一个节点的widget实例在重新构建时可能会变化，但State实例只会在第一次插入到树中时被创建，当在重新构建时，如果widget被修改了，Flutter framework会动态设置State.widget为新的widget实例。

- context，它是BuildContext类的一个实例，表示构建widget的上下文，它是操作widget在树中位置的一个句柄，它包含了一些查找、遍历当前Widget树的一些方法。每一个widget都有一个自己的context对象。

- 对于BuildContext读者现在可以先作了解，随着本书后面内容的展开，也会用到Context的一些方法，读者可以通过具体的场景对其有个直观的认识。

> 对于StatefulWidget，将build方法放在State中，可以给开发带来很大的灵活性。

## state 生命周期

- initState：当Widget第一次插入到Widget树时会被调用，对于每一个State对象，Flutter framework只会调用一次该回调，所以，通常在该回调中做一些一次性的操作，如状态初始化、订阅子树的事件通知等。不能在该回调中调用BuildContext.inheritFromWidgetOfExactType（该方法用于在Widget树上获取离当前widget最近的一个父级InheritFromWidget，关于InheritedWidget我们将在后面章节介绍），原因是在初始化完成后，Widget树中的InheritFromWidget也可能会发生变化，所以正确的做法应该在在build（）方法或didChangeDependencies()中调用它。

- didChangeDependencies()：当State对象的依赖发生变化时会被调用；例如：在之前build() 中包含了一个InheritedWidget，然后在之后的build() 中InheritedWidget发生了变化，那么此时InheritedWidget的子widget的didChangeDependencies()回调都会被调用。典型的场景是当系统语言Locale或应用主题改变时，Flutter framework会通知widget调用此回调。
build()：此回调读者现在应该已经相当熟悉了，它主要是用于构建Widget子树的，会在如下场景被调用：

    1. 在调用initState()之后。
    2. 在调用didUpdateWidget()之后。
    3. 在调用setState()之后。
    4. 在调用didChangeDependencies()之后。
    5. 在State对象从树中一个位置移除后（会调用deactivate）又重新插入到树的其它位置之后。

- reassemble()：此回调是专门为了开发调试而提供的，在热重载(hot reload)时会被调用，此回调在Release模式下永远不会被调用。

- didUpdateWidget()：在widget重新构建时，Flutter framework会调用Widget.canUpdate来检测Widget树中同一位置的新旧节点，然后决定是否需要更新，如果Widget.canUpdate返回true则会调用此回调。正如之前所述，Widget.canUpdate会在新旧widget的key和runtimeType同时相等时会返回true，也就是说在在新旧widget的key和runtimeType同时相等时didUpdateWidget()就会被调用。

- deactivate()：当State对象从树中被移除时，会调用此回调。在一些场景下，Flutter framework会将State对象重新插到树中，如包含此State对象的子树在树的一个位置移动到另一个位置时（可以通过GlobalKey来实现）。如果移除后没有重新插入到树中则紧接着会调用dispose()方法。

- dispose()：当State对象从树中被永久移除时调用；通常在此回调中释放资源。

## 状态管理

- 如果状态是用户数据，如复选框的选中状态、滑块的位置，则该状态最好由父widget管理。

- 如果状态是有关界面外观效果的，例如颜色、动画，那么状态最好由widget本身来管理。

- 如果某一个状态是不同widget共享的则最好由它们共同的父widget管理。

在widget内部管理状态封装性会好一些，而在父widget中管理会比较灵活。有些时候，如果不确定到底该怎么管理状态，那么推荐的首选是在父widget中管理（灵活会显得更重要一些）。

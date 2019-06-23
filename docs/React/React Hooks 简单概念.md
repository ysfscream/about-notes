# React Hooks 简单概念

> Hooks are functions that allow you to use state and “life cycle” for functional Components, that means you don’t need to write classes in order to build React components.

Hooks 让你在不写 class 的情况下也能使用状态和其他 React 的特性。其作用就是让你可以不用类组件就可以使用react的state和其他功能。大家都知道，class的写法有的时候很繁琐，比如其中的this问题等等。主要包括这几个`useState`、`useEffect`、`useContext`、`useRef`

## useState

比如说有一个组件需要内部维护自己的状态，之前我们写class组件的话一般都是定义一下state，然后需要修改的时候，用setState去修改自身的状态。**useState**这个函数就是起到了这个作用，接受一个参数`initialState`，也就是初始的state，同时返回一个数组，第一个是当前的state，第二个就是相当于以前class组件的setState，每次调用这个函数都会更新state同时让当前组件重新渲染一遍

之前的组件：

```javascript
import React, { Component } from "react";

class Input extends Component {
    construct(props) {
        super(props)
        this.state = {
            name: 'Yu'
        }
    }
    handleChange(e) {
        this.setState({
            name: e.target.value
        })
    }
    render() {
        return (
            <input
               value={this.state.name}
               onChange={this.handleChange.bind(this)}/>
        )
    }
}
```

改用 Hooks

```javascript
import React, { useState } from "react";

const Input = () => {
    const [name, setName] = useState('Yu')
    return (
        <input
            value={name}
            onChange={e => setName(e.target.value)}/>
    )
}
```

## useEffect

使用这个函数你可以通知react在当前组件每次渲染完成之后需要完成什么动作，我觉得其作用可以理解为与之前的componentDidMount和componentDidUpdate两个生命周期函数类似。这个函数支持两个参数，第一个参数是一个函数，会在每次render之后执行，同时这个函数也可以返回一个函数，这个函数会在组件卸载后执行，类似于类组件的componnentDidUnmount生命周期函数。

```javascript
const Width = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const setWidthFn = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize',setWidthFn);
        return () => {
            window.removeEventListener('resize',setWidthFn)
        }
    });
    return (
        <div>
            <h1>当前窗口宽度{width}px</h1>
        </div>
    )
}
```

这样也有缺点，就是每次render的时候都会执行一遍这个函数，有的时候我们并不希望都去执行，比如说一个详情组件在第一次render的时候会跟根据props传递过来的id去取值，如果这样写的话，每一次props改变的时候都会引发组件，重新请求一遍。这样的话可以给useEffect函数传递第二个参数，请求详情的这个函数就只会在id改变的时候执行。

```javascript
useEffect(() => {
    doSomething(id)
  }, [id])
```

当然，第二个参数可以传递进不只一个依赖项，这样就是告诉React多个依赖项有一个发生变化就会重新执行这个函数。也可以传递进一个空数组，这样是告诉React这个函数只执行一次。

## useRef

这个函数同样会接受一个initialState作为参数，同时返回一个对象，其中的current就是你当前传递进去的initialState，你可以把返回的对象作为ref属性，传递给子组件来获取DOM对象，同时你也可以用它来保存previousProps

```javascript
const Counter = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
  });
  const prevCount = prevCountRef.current;
  return (
    <div>
      <h1>Now: {count}, before: {prevCount}</h1>
      <button onClick={setCount(count + 1)}>Click Me!</button>  
    </div>
  )
}
```

## useContext

用法很简单，将React.createContext返回的结果传入useContext即可，同时context改变的时候也会引发该组件重新渲染。

## Suspense

Suspense 会自动处理加载延迟，显示像 Loading... 之类的组件作为 fallback。

```javascript
import React, { useState, useEffect, Suspense } from "react";

const TodoList = React.lazy(() => import('./components/todolist'))

const App = () => {
    return (
        <div className="todolist-view">
            <Suspense fallback={<div>Loading...</div>}>
                <TodoList
                    payload={todoListPayload}
                    completeTodoTaskHandler={completeTodoTaskHandler}
                />
            </Suspense>
        </div>
    )
}
```

只要用 Suspense 包装组件就行了，就是这么简单。我们使用 React.lazy() 懒加载了组件：TodoList。由于它会在内部为每个组件生成 bundle，因此网络条件不佳的情况下可能需要花些时间来加载它们。

## 总结

> 我开始学习react的时候就想过React的logo和react有什么关系，这个项目也不叫做Atom（原子），也不是一个物理引擎，其中的一个解释是基于reaction（反应）的，化学反应就是基于原子在其中的表现，所以叫react。但是，我发现了一个更合理的解释，我觉得是这样，原子的种类和属性决定了物理反应的表现和形态，react让我知道了你可以把用户界面分离成一个个独立的个体，这个个体叫做组件，这些组件的属性和种类决定了用户界面的外观和特效。可是搞笑的是，Atom这个词的本身含义就是不可分离的，当科学家们第一次发现原子的时候，他们以为这就是最小的物质，但不久他们就发现了电子，电子就是原子中更小的一部分，电子对原子如何表现进行了更深一层的解释。我觉得hooks就像是电子一样，他不是一个新的功能，他只是让我能够使用那些react已知的功能，比如说state（状态），context（上下文），life cycle生命周期函数，hooks是react一种更直接的表达方式，更好的解释了组件如何在内部工作的，我觉得这些已经隐藏了长达四年久，现在你看一下react的logo，你可以看到那些电子的运动轨道，所以说hooks可能就一直存在，就像logo上的电子轨道一样。 - Dan Abramov

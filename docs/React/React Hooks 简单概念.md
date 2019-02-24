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

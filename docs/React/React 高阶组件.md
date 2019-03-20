# React 高阶组件

> 高阶组件就是一个函数，传给它一个组件，它返回一个新的组件。

高阶组件（HOC）是一个将组件作为参数并返回一个新组件的函数。他是一种由 React 自身组合性质产生的模式。由于高阶组件接受他的组件参数来动态创建子组件，且不会修改或复制其组件中的任何行为，因此他与纯组件较为类似。

高阶组件的作用：其实就是为了组件之间的代码复用。组件可能有着某些相同的逻辑，把这些逻辑抽离出来，放到高阶组件中进行复用。高阶组件内部的包装组件和被包装组件之间通过 props 传递数据。

高阶组件这种方式很有意思，也很灵活。它其实就是设计模式里面的装饰者模式。它通过组合的方式达到很高的灵活程度。

一个从 ajax 获取数据的例子：

```javascript
export default (WrappedComponent, url) => {
  class newComponents extends Component {
    constructor() {
      super()
      this.state = {
        data: null,
      }
    }

    comonentsWillMount() {
      Ajax.get(url).then((res) => {
        this.setState({
          data: res.data,
        })
      })
    }

    render() {
      return <WrappedComponent data={this.state.data} />
    }
  }

  return newComponents
}
```

```javascript
import wrapWithAjax from './wrapWithAjax'

class InputWithData = (props) => {
  return <input value={props.data} />
}

InputWithData = wrapWithAjax(InputWithData, '/api/v1/get_username')
export default InputWithData
```

只要改一下包装的高阶组件就可以达到需要的效果。而且我们并没有改动 InputWithUserName 组件内部的任何逻辑，也没有改动 Index 的任何逻辑，只是改动了中间的高阶组件函数。

**注意**：

_ 由于 Mixins 产生的问题比其带来的价值要大的多，因此我们要么避免过早的抽象，要么可以使用高阶组件。

- 不要在 render 方法内使用高阶组件，否则每一次渲染都会创建一个新的组件，并引起该组件的卸载和渲染。

- 高阶组件返回的新组件中将没有参数组件中的任何静态方法。因此需要对静态方法进行拷贝（可使用 hoist-non-react-statics）或分别导出组件自身的静态方法

- 在高阶组件中由于 refs 属性不能贯穿传递，但可以使用 React.forwardRef 来替代。

- 在高阶组件内，应避免对组件做任何修改。应使用组合技术，将输入的组件包裹到一个容器组件中

```javascript
const logProps = (WrappedComponent) => {
  return class extends React.Component {
    componentWillReceiveProps(nextProps) {
      console.log('Current props: ', this.props);
      console.log('Next props: ', nextProps);
    }
    render() {
      // 用容器包裹输入组件，不要修改它
      return <WrappedComponent {...this.props} />;
    }
  }
}
```
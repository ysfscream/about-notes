# Vue Vuex 禁止对函数参数再赋值 (no-param-reassign)

vex 中修改 mutation 里函数的 state 参数，来改变状态里的值，state 作为函数参数时，当参数，会出现 Assignment to property of function parameter 错误

```js
 // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'logoutState', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
```

可以在 eslintrc 配置中修改加入需要忽略的参数值

http://eslint.cn/docs/rules/no-param-reassign
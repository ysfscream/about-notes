# Js 模板字符串

## 简单概念

```javascript
const b = 'world'
const a = `Hello ${b}` // Hello world
```

## 标记的模板

当我们在模板文字之前放置自定义处理函数时，我们会获得标记模板。这意味着反引号内的任何内容都将在成为字符串之前通过该处理函数。 调用函数的方式非常简单。

```javascript
const tagFunction = (strings, ...values) => {
  console.log(strings); // ["This is number ", " and this is number ", ""]
  console.log(values); // [1, 2]
};

tagFunction`This is number ${1} and this is number ${2}`;
```

## 例子

例如 styled-components for React 我们可以基于传过来的 props 设置 CSS 值

```javascript
const Paragraph = styled.p`
  font-weight: ${props => props.bold ?  "bold ": "normal"};
`

<Paragraph bold>Test</Paragraph> // Bold text

<Paragraph>Test</Paragraph> // Normal text
```

这些也被定义到 GraphQL query schemas in Apollo:

```javascript
const currentUserQuery = gql`
  query CurrentUserProfile {
    currentUser {
      login
      avatar
    }
  }
`;
```

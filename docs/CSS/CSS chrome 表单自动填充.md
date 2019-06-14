# CSS  chrome 表单自动填充

## 自定义表单颜色

chrome 自动填充表单时 输入框背景颜色为黄色

可以用以下 css 修改背景颜色

```css
input:-webkit-autofill {  
    -webkit-box-shadow: inset 0 0 0 1000px #fff; 
    background-color: transparent; 
}
```

## 禁止自动填充

Mozilla developer documentation 建议使用表单设置属性 autocomplete="off" 来阻止浏览器从cache获取数据填充登录表单。

```html
<input autocomplete="off"/>
```

但是一些新的浏览器不生效，Chrome 建议如下

登录：

```html
<form id="login" action="login.php" method="post">
  <input id="emailfield" type="text" value="me@example.test" autocomplete="username">
  <input type="password" autocomplete="current-password">
  <input type="submit" value="Sign In!">
</form>
```

注册：

```html
<form id="signup" action="signup.php" method="post">
  <input type="text" autocomplete="username">
  <input type="password" autocomplete="new-password">
  <input type="submit" value="Sign Up!">
</form>
```

使用 autocomplete="new-password" 就不会自动填充了

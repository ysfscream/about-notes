# Vue Router push 和 replace 的区别

1. this.$router.push()

描述：跳转到不同的url，但这个方法会向history栈添加一个记录，点击后退会返回到上一个页面。



2. this.$router.replace()

描述：同样是跳转到指定的url，但是这个方法不会向history里面添加新的记录，点击返回，会跳转到上上一个页面。上一个记录是不存在的。



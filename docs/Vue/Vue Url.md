# Vue Url



mode: 'history’,取消#号

\# 号的作用当前端和后端路由一致时  单页应用刷新后  返回的是后端的路由  后端路由不识别#号  所以添加#号可以  在前后端路由返回不一致时  防止进入404

nodejs Express 可以 [https://github.com/bripkens/connect-history-api-fallback](https://github.com/bripkens/connect-history-api-fallback)

返回同一个 index.html 页面

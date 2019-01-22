const siderbarList = require('../../siderbar.json')

const getSidebar = (title, children) => {
  return title.map((side) => {
    return {
      title: side,
      collapsable: true
    }
  })
}

module.exports = {
  title: '扁头的窝子 | Notes',
  description: "Yushifan's Personal messy blog",
  dest: './dist', // 设置输出目录
  repo: 'https://github.com/ysfscream/about-blog',
  themeConfig: {
    // 为以下路由添加侧边栏
    sidebar: getSidebar(siderbarList)
  }
}

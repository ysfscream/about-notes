const fs = require('fs')
const path = require('path')

const siderbarList = fs.readdirSync('./docs')
  .filter($ => !['.vuepress', 'README.md'].includes($))

const getSidebar = (titles) => {
  return titles.map((title) => {
    const root = path.join(`./docs/${title}`)
    const filters = ['.DS_Store']
    const files = fs.readdirSync(root)
      .filter(file => !filters.includes(file))
      .map(file => `/${title}/${file}`)
    return {
      title,
      collapsable: true,
      children: files
    }
  })
}

module.exports = {
  title: '扁头的窝子 | Notes',
  description: "Yushifan's Personal messy blog",
  base: '/about-blog/',
  dest: './dist', // 设置输出目录
  repo: 'https://github.com/ysfscream/about-blog',
  themeConfig: {
    // 为以下路由添加侧边栏
    sidebar: getSidebar(siderbarList)
  }
}

const fs = require('fs')
const path = require('path')
const ga = require('./googleGa')

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
  description: "Yushifan's personal messy notes",
  dest: './dist', // 设置输出目录
  base: '/about-notes/',
  themeConfig: {
    nav: [
      { text: 'Home Page', link: 'https://ysfscream.xyz' },
      { text: 'Github', link: 'https://github.com/ysfscream/about-notes' },
      { text: 'Blog', link: 'https://github.com/ysfscream/ysfscream.github.io/issues' }
    ],
    // 为以下路由添加侧边栏
    sidebar: getSidebar(siderbarList)
  },
  plugins: [
    '@vuepress/pwa',
    [
      '@vuepress/google-analytics',
      {
        'ga': ga // UA-00000000-0
      }
    ]
  ],
}

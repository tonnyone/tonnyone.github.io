// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '系列文章',
    link: '/all/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      { text: '跟我一起学NodeJs', link: '/pages/nodejs1/' },
      { text: 'JavaScript 异步编程', link: '/pages/javascript_yb/' },
      { text: 'kafka 相关知识', link: '/pages/kafka/' },
    ],
    /**items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '连载',
        items: [
          { text: '跟我一起学NodeJs', link: '/pages/nodejs1/' },
          { text: 'JavaScript异步编程', link: '/pages/javascript_yb/' },
          { text: 'kafka 相关知识', link: '/pages/kafka/' },
        ],
      },
      /**{
        text: '文章',
        items: [
          { text: '《ES6 教程》笔记', link: '/note/es6/' },
          { text: '《Vue》笔记', link: '/note/vue/' }
        ],
      },
    ],**/
  },
  /**{
    text: '后端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: 'JAVA开发',
        link: '/java/',
      }
    ],
  },**/
  // {
  //   text: '更多',
  //   link: '/more/',
  //   items: [
  //     { text: '友情链接', link: '/friends/' },
  //   ],
  // },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
  { text: '关于', link: '/about/' },
]

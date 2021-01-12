// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '文章',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '连载',
        items: [
          { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
          { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
        ],
      },
      {
        text: '杂谈',
        items: [
          { text: '《ES6 教程》笔记', link: '/note/es6/' },
          { text: '《Vue》笔记', link: '/note/vue/' }
        ],
      },
    ],
  },
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

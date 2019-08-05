module.exports = {
  head: [
    ['link', { rel: 'icon', href: `https://ifking.cn/favicon.png` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    nav: [
      { text: '博客', link: 'https://ifking.cn' },
    ]
  },
 title: '文档库',
 description: '我若为王的文档库',
  plugins: [
    [
      'vuepress-plugin-yuque',{
        html: true,
        yuqueLink: true,
        repoUrl: 'https://www.yuque.com/ilay/666',
        home: {
          actionText: 'Getting Started →',
          actionLink: './api.html',
          heroImage: 'https://ifking.cn/favicon.png',
          footer: `Copyright © 我若为王`,
        }
      }
    ]
  ]
}

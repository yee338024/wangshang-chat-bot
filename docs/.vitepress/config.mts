import { defineConfig } from 'vitepress'

const siteRoot = 'https://yee338024.github.io/wangshang-chat-bot/'

export default defineConfig({
  base: '/wangshang-chat-bot/',
  lang: 'zh-CN',
  title: '旺商聊（旺旺）聊天协议',
  titleTemplate: ':title | 旺商聊（旺旺）聊天协议',
  description: '旺商本地 HTTP 与 WebSocket 协议文档',
  cleanUrls: true,
  head: [
    ['meta', { name: 'robots', content: 'index,follow' }],
    [
      'link',
      {
        rel: 'sitemap',
        type: 'application/xml',
        title: 'Sitemap',
        href: `${siteRoot}sitemap.xml`
      }
    ]
  ],
  transformPageData: (pageData) => {
    if (pageData.relativePath === '404.md') {
      return
    }

    let route = pageData.relativePath.replace(/\.md$/, '')
    route = route.replace(/(^|\/)index$/, '$1')

    const canonicalUrl = new URL(route, siteRoot).toString()

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(['link', { rel: 'canonical', href: canonicalUrl }])
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '开发文档', link: '/usage' },
    ],
    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/jenkins_pro' }
    ],
    sidebar: [
      {
        text: '文档',
        items: [
          { text: '开发文档', link: '/usage' },
          { text: 'WebSocket 文档', link: '/websocket' },
          { text: '发送好友文本信息', link: '/send-friend-text-msg' },
          { text: '获取当前用户信息', link: '/current-user' },
          { text: '获取应用设置', link: '/query-app-settings' },
        ]
      },
      {
        text: '好友',
        items: [
          { text: '获取好友列表', link: '/get-friend-list' },
          { text: '获取黑名单信息', link: '/get-black-list-info' },
          { text: '获取好友信息', link: '/get-friend-info' },
          { text: '拉黑好友', link: '/friend-black-setting' },
          { text: '取消拉黑好友', link: '/friend-black-cancel' },
        ]
      },
      {
        text: '群聊',
        items: [
          { text: '获取群公告列表', link: '/get-group-notice-list' },
          { text: '发送群文本信息', link: '/send-group-text-msg' },
          { text: '群禁言设置', link: '/set-group-mute' },
          { text: '获取群成员列表', link: '/get-group-members' },
          { text: '获取群组列表', link: '/get-group-list' },
          { text: '获取群组信息', link: '/get-group-info' },
          { text: '获取聊天室信息', link: '/get-room' },
          { text: '群成员禁言', link: '/group-member-mute' },
          { text: '群成员取消禁言', link: '/group-member-mute-cancel' },
        ]
      }
    ],
  }
})

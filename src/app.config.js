export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/login/index',
    'pages/dailyRecom/index',
    'pages/blog/index',
    'pages/music/index',
    'pages/follow/index',
    'pages/community/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '音乐',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {pagePath: 'pages/index/index', text: '发现', iconPath: 'assets/img/find.png', selectedIconPath: 'assets/img/find_active.png'},
      {pagePath: 'pages/blog/index', text: '播客', iconPath: 'assets/img/blog.png', selectedIconPath: 'assets/img/blog_active.png'},
      {pagePath: 'pages/music/index', text: '我的', iconPath: 'assets/img/music.png', selectedIconPath: 'assets/img/music_active.png'},
      {pagePath: 'pages/follow/index', text: '关注', iconPath: 'assets/img/follow.png', selectedIconPath: 'assets/img/follow_active.png'},
      {pagePath: 'pages/community/index', text: '社区', iconPath: 'assets/img/community.png', selectedIconPath: 'assets/img/community_active.png'},
    ],
    custom: true
  },
  requiredBackgroundModes: ['audio']
})

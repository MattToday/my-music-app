const app = {
  state: {
    showAudio: false, // 是否展示音乐播放弹窗页面
    loading: false, // 加载
    navBarHeight: 0, // 顶部导航栏高度
  },
  reducers: {
    changeShowAudio(state, playload) {
      return {...state, showAudio: playload}
    },
    setNavBarHeight(state, playload) {
      return {...state, navBarHeight: playload}
    }
  },
  effects: {

  }
}

export default app

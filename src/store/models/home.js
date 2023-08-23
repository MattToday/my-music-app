import { getBannerDataApi } from '@api/home'
import store from '../index'

const home = {
  state: {
    banner: [],
    recommendSongs: [] // 每日推荐
  },
  reducers: {
    setBanner(state, banner) {
      return {...state, banner}
    }
  },
  effects: (dispatch) => ({
    async getBannerData() {
      const res = await getBannerDataApi()
      this.setBanner(res.banners)
      const { playingMusic } = store.getState().music
      console.log('playingMusic', playingMusic)
      if (!playingMusic.id) {
        const music = res.banners.find((item) => item.targetType === 1)
        dispatch.music.getSongDetail(music.targetId)
      }
    }
  })
}

export default home

import { getSongDetail, getSongUrl, getSongLyric, getRecommendSongsApi } from '@api/home'
// import { setStorage } from '@utils/storage'
import { parse_lrc } from '@utils/common'

const music = {
  state: {
    playingMusic: {}, // 当前播放音乐详情
    playing: false, // 音乐播放状态
    playMode: '', // 播放顺讯 one单曲播放、shuffle随机播放、其他干顺序播放
    recommendSongs: []
  },
  reducers: {
    setPlayingMusic(state, playingMusic) {
      return {...state, playingMusic}
    },
    setPlayingUrl(state, playingUrl) {
      return {...state, playingUrl}
    },
    changePlaying(state, payload) {
      return {...state, playing: payload}
    },
    setRecommendSongs(state, recommendSongs) {
      return {...state, recommendSongs}
    }
  },
  effects: {
    async getSongDetail(id) {
      const songDetail = await getSongDetail({ids: id})
      const songUrlInfo = await getSongUrl({id})
      const songLyric = await getSongLyric({id})
      const songInfo = songDetail.songs[0]
      songInfo.url = songUrlInfo.data[0].url
      const lrc = parse_lrc(songLyric.lrc && songLyric.lrc.lyric ? songLyric.lrc.lyric : '');
      songLyric.lrclist = lrc.now_lrc
      songLyric.scroll = lrc.scroll ? 1 : 0
      songInfo.lrcInfo = songLyric
      this.setPlayingMusic(songInfo)
      // setStorage('playingMusic', songInfo)
    },
    async getRecommendSongs() {
      const res = await getRecommendSongsApi()
      const { dailySongs } = res.data
      const result = dailySongs.filter(item => {
        return item.fee !== 1 && item.fee !== 4
      })
      this.setRecommendSongs(result)
    }
  }
}

export default music


import requset from '../request'

// 获取轮播信息

export const getBannerDataApi = () => {
  return requset.get('/banner')
}

// 获取歌曲详情
export const getSongDetail = (ids) => {
  return requset.get('/song/detail', ids)
}

// 获取歌曲URL
export const getSongUrl = (data) => {
  return requset.get('/song/url/v1', {level: 'higher', ...data})
}

// 获取歌词
export const getSongLyric = (data) => {
  return requset.get('/lyric', data)
}

// 获取每日推荐
export const getRecommendSongsApi = () => {
  return requset.post('/recommend/songs')
}

import { useLoad, navigateTo } from '@tarojs/taro'
import NavBarCommon from '@components/NavBarCommon'
import TabBar from '@components/TabBar'
import SearchBar from '@components/SearchBar'
import HomeBanner from '@components/HomeBanner'
import HomeClassMenu from '@components/HomeClassMenu'
import { getLoginStatue } from '@api/user'
import { getStorage } from '@utils/storage'
import { View } from '@tarojs/components'
import { AtIcon, AtDrawer } from 'taro-ui'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { HomeWrapper } from './style'

export default function Index() {
  const [drawerShow, setDrawerShow] = useState(false) // 左侧菜单展示开关

  const navbarRenderLef = <AtIcon onClick={() => setDrawerShow(true)} value='menu' size='30' color='#2a3146'></AtIcon> // 自定义导航栏左侧功能按钮
  const dispatch = useDispatch()
  useEffect(() => {
    // 从本地获取上次播放音乐信息
    const historyMusicInfo = getStorage('playingMusic')
    if (historyMusicInfo) {
      dispatch.music.setPlayingMusic(historyMusicInfo)
    }
  }, [])

  useLoad(() => {
    console.log('useLoad')
    getLoginStatue().then((res) => {
      const { status } = res.data.account
      if (status === 0) {
        dispatch.music.getRecommendSongs()
      }
    })
    dispatch.home.getBannerData()
  })
  return (
    <HomeWrapper>
      {/* 顶部导航栏 */}
      <NavBarCommon renderLeft={navbarRenderLef}>
        <SearchBar />
      </NavBarCommon>
      {/* 左侧抽屉 */}
      <AtDrawer
        show={drawerShow}
        mask
        width='250px'
        onClose={() => setDrawerShow(false)}
      >
        <View className='drawer'>敬请期待</View>
      </AtDrawer>
      <View className='content'>
        <HomeBanner className='home-banner'></HomeBanner>
      </View>

      {/* 菜单分类 */}
      <HomeClassMenu></HomeClassMenu>

      {/* 底部导航栏 */}
      <TabBar />
    </HomeWrapper>
  )
}

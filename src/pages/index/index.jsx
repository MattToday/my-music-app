// import { AtButton } from 'taro-ui'
// import { useDispatch, useSelector } from 'react-redux'
// import { Button, View } from '@tarojs/components'
import { View } from '@tarojs/components'
import { AtIcon, AtDrawer } from 'taro-ui'
import { useState } from 'react'
import { HomeWrapper } from './style'
import NavBar from '../../components/Navbar'
import TabBar from '../../components/TabBar'
import SearchBar from '../../components/SearchBar'

export default function Index() {
  const [drawerShow, setDrawerShow] = useState(false)

  const navbarRenderLef = <AtIcon onClick={() => setDrawerShow(true)} value='menu' size='30' color='#2a3146'></AtIcon>

  return (
    <HomeWrapper>
      {/* 顶部导航栏 */}
      <NavBar renderLeft={navbarRenderLef}>
        <SearchBar />
      </NavBar>
      {/* 左侧抽屉 */}
      <AtDrawer
        show={drawerShow}
        mask
        width='250px'
        onClose={() => setDrawerShow(false)}
      >
        <View className='drawer'>敬请期待</View>
      </AtDrawer>

      {/* 底部导航栏 */}
      <TabBar />
    </HomeWrapper>
  )
}

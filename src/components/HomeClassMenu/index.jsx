import  { memo } from 'react';
import { Text, View } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import { WrapperHomeClassMenu } from './style';

const HomeClassMenu = memo(() => {

  const jumpPage = (url) => {
    navigateTo({
      url
    })
  }

  return (
    <WrapperHomeClassMenu>
      <View className='menu-item' onClick={() => {jumpPage('/pages/dailyRecom/index')}}>
        <View className='ico'>
          <Text className='iconfont icon-meirituijian'></Text>
        </View>
        <View className='menu-name'>每日推荐</View>
      </View>
      <View className='menu-item'>
        <View className='ico'>
          <Text className='iconfont icon-gedan'></Text>
        </View>
        <View className='menu-name'>歌单</View>
      </View>
      <View className='menu-item'>
        <View className='ico'>
          <Text className='iconfont icon-diantaizhibo'></Text>
        </View>
        <View className='menu-name'>私人漫游</View>
      </View>
      <View className='menu-item'>
        <View className='ico'>
          <Text className='iconfont icon-paihangbang'></Text>
        </View>
        <View className='menu-name'>排行榜</View>
      </View>
    </WrapperHomeClassMenu>
  );
});

export default HomeClassMenu;

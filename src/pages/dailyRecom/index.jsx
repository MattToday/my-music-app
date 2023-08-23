// 每日推荐

import Taro from '@tarojs/taro';
import { memo, useState } from 'react';
import { Image, View, Text } from '@tarojs/components';
import { Sticky } from '@antmjs/vantui'
import { useSelector } from 'react-redux';
import headerImg_1 from '@assets/img/1.jpg'
import headerImg_2 from '@assets/img/2.jpg'
import headerImg_3 from '@assets/img/3.jpg'
import headerImg_4 from '@assets/img/4.jpg'
import headerImg_5 from '@assets/img/5.jpg'
import NavBarCommon from '@components/NavBarCommon';
import { WrapperDailyRecom } from './style';

const imgMap = {
  1: headerImg_1,
  2: headerImg_2,
  3: headerImg_3,
  4: headerImg_4,
  5: headerImg_5
}

const headerImg = imgMap[Math.floor(Math.random() * 6)]
console.log(headerImg)
const DailyRecom = memo(() => {
  const { navBarHeight, recommendSongs } = useSelector((state) => ({
    navBarHeight: state.app.navBarHeight,
    recommendSongs: state.music.recommendSongs
  }))
  console.log(recommendSongs)
  const dateNow = new Date()
  const date = {
    day:  ('0' + dateNow.getDay()).substr(-2),
    month: ('0' + dateNow.getMonth()).substr(-2)
  }

  const titleMes = (alia) => {
    if (alia && alia.length) {
      return (
        <View className='title-mes'>
          {
            alia.join('、')
          }
        </View>
      )
    }
    return ''
  }
  const autho = (song) => {
    let tag = []
    if (song.reason) {
      tag.push(<View className='reason-tag'>{song.reason}</View>)
    }
    tag.push(
      <View className='autho'>
        {
          song.ar.map(ar => {
            return ar.name
          }).join('/') + ' - ' + song.al.name
        }
      </View>
    )
    if (song.originSongSimpleData) {
      tag.push(<View className='space'>|</View>)
      tag.push(
        <View className='real-autho'>
          {`原唱：${song.originSongSimpleData.artists[0].name}`}
        </View>
      )
    }
    return tag
  }
  return (
    <WrapperDailyRecom navBarHeight={navBarHeight}>
        <NavBarCommon title='每日推荐' isFixed ></NavBarCommon>
        <View className='recom-header'>
          <Image mode='widthFix' src={headerImg} />
          <View className='inner-wrapper'>
            <View className='date'>
              <View className='day'>{date.day}</View>/<View className='month'>{date.month}</View>
            </View>
          </View>
        </View>
        <View className='contro-bar'>
          <View className='left'>
            <Text className='iconfont icon-24gf-playCircle play'></Text>
            <Text className='play-all'>全部播放</Text>
          </View>
        </View>
        <View className='songs-list'>
          {
            recommendSongs?.map(song => {
              return (
                <View className='song' key={song.id}>
                  <View className='left'>
                    <Image src={song.al.picUrl} />
                    <View className='song-mes'>
                      <View className='title-wrap'>
                        <View className='title'>
                          {song.al.name}
                        </View>
                        {titleMes(song.alia)}
                      </View>
                      <View className='autho'>
                        {
                          autho(song)
                        }
                      </View>
                    </View>
                  </View>
                  <View className='right'>

                  </View>
                </View>
              )
            })
          }
        </View>
    </WrapperDailyRecom>
  );
});

export default DailyRecom;

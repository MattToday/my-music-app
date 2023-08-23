import Taro from '@tarojs/taro';
import PropTypes from 'prop-types'
import { View, Image, Text } from '@tarojs/components';
import classname from 'classname';
import {  memo } from 'react';
import { TabBarWrapper } from './style';
import AudioPlay from '../AudioPlay';

const TabBar = memo((props) => {
  const tableList = [
    {pagePath: 'pages/index/index', title: '发现', image: '../../assets/img/find.png', selectedImage: '../../assets/img/find_active.png'},
    {pagePath: 'pages/blog/index', title: '播客', image: '../../assets/img/blog.png', selectedImage: '../../assets/img/blog_active.png'},
    {pagePath: 'pages/music/index', title: '我的', image: '../../assets/img/music.png', selectedImage: '../../assets/img/music_active.png'},
    {pagePath: 'pages/follow/index', title: '关注', image: '../../assets/img/follow.png', selectedImage: '../../assets/img/follow_active.png'},
    {pagePath: 'pages/community/index', title: '社区', image: '../../assets/img/community.png', selectedImage: '../../assets/img/community_active.png'},
  ]

  const handleClick = (pagePath) => {
    if (pagePath === props.path) {
      return
    }
    Taro.switchTab({
      url: `/${pagePath}`
    })
  }

  return (
    <TabBarWrapper>
      <AudioPlay></AudioPlay>
      <View className='tab-bar-inner'>
        {
          tableList.map(tab => (
            <View className={classname('tabbar__item', {active: tab.pagePath === props.path})} key={tab.title} onClick={() => handleClick(tab.pagePath)}>
              <View className='tabbar__item_icon-wrapper'>
                <Image className='tabbar__item__icon default' src={tab.pagePath === props.path ? tab.selectedImage : tab.image} />
              </View>
              <Text className='tabbar__item__text'>{ tab.title }</Text>
            </View>
          ))
        }
      </View>
    </TabBarWrapper>
  );
});

export default TabBar;

TabBar.prototype = {
  path: PropTypes.string
}

TabBar.defaultProps = {
  path: 'pages/index/index'
}

import PropTypes from 'prop-types'
import Skeleton from 'taro-skeleton'
import { Image, View } from '@tarojs/components'
import { Swiper, SwiperItem } from '@antmjs/vantui'
import { shallowEqual, useSelector } from 'react-redux'
import { memo } from 'react';
import { HomeBannerWrapper } from './style';

const HomeBanner = memo((props) => {
  const { banner } = useSelector((state) =>({
    banner: state.home.banner
  }), shallowEqual)

  const swiperClick = (swiper) => {
    if (swiper.targetType === 1) {
      // 开始播放单曲targetId
    }
  }

  return (
    <HomeBannerWrapper className={props.className}>
      {
        banner.length ? (
          <Swiper
            className='swiper'
            height={135}
            paginationVisible
            paginationColor='#fff'
            autoplay
          >
            {
              banner.filter(item => item.targetType !== 3000).map(item => (
                <SwiperItem key={item.encodeId}>
                  <Image className='img' mode='aspectFill' src={ item.imageUrl } />
                  <View className='tag'>{ item.typeTitle }</View>
                </SwiperItem>
              ))
            }
          </Swiper>
        ) : (
          <Skeleton className='banner-skeleton' row={1} rowProps={{height: '135px'}} />
        )
      }
    </HomeBannerWrapper>
  );
});

export default HomeBanner

HomeBanner.defaultProps = {
}

HomeBanner.propTypes = {
}

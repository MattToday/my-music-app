import { styled } from "linaria/react";

export const HomeBannerWrapper = styled.View`
  .swiper {
    height: 270px;
    position: relative;
    width: 690px;
    margin: 0 auto;
    .img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }
    .tag {
      font-size: 16px;
      height: 26px;
      line-height: 26px;
      padding: 0 6px;
      position: absolute;
      right: 10px;
      bottom: 10px;
      color: #4a0907;
      background-color: #fff;
      border-radius: 8px;
    }
  }
  .van-swiper__pagination-item {
    background: rgba(255, 255, 255, 0.6);
  }
  .banner-skeleton {
    padding: 0;
    width: 690px;
    margin: 0 auto;
  }
  .skeleton-row {
    border-radius: 20px;
  }
`

export const CurrentWrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  .current-item {
    height: 12px;
    width: 12px;
  }
`

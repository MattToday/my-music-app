import { styled } from "linaria/react";

export const WrapperDailyRecom = styled.View`
  padding-top: ${props => props.navBarHeight ? props.navBarHeight + 'px' : 0};
  .recom-header {
    position: relative;
    image {
      width: 100%;
      display: block;
    }
    .inner-wrapper {
      position: absolute;
      overflow: hidden;
      z-index: 2;
      bottom: 130px;
      left: 40px;
      width: 100%;
      .date {
        color: #fff;
        display: flex;
        align-items: flex-end;
        line-height: 1;
        font-weight: bold;
        .day {
          font-size: 114px;
          padding-right: 10px;
        }
        .month {
          padding-left: 10px;
          font-size: 44px;
        }
      }
    }
  }
  .navbar {
    position: fixed!important;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
  }
  .songs-list {
    height: 2000px;
    background-color: #eee;
  }
  .contro-bar {
    padding: 42px 22px;
    .left {
      display: flex;
      align-items: center;
    }
    .play {
      color: #ea4d44;
      font-size: 60px;
      margin: 20px;
    }
    .play-text {
      font-size: 48px;
      color: #333;
    }
  }
`

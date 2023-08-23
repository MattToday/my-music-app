import { styled } from "linaria/react";

export const AudioPlayWrapper = styled.View`
  height: 90px;
  box-sizing: border-box;
  border-bottom: 1px solid #ebebee;
  display: flex;
  padding: 0 30px;
  align-items: center;
  justify-content: space-between;
  .left {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .img-wrap {
    height: 70px;
    width: 70px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 16px;
    &.playing {
      animation: rote 5s linear infinite;
    }
    .music-pic {
      display: block;
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
  .music-title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 24px;
    color: #00061f;
    height: 45px;
    line-height: 45px;
    width: 440px;
  }
  .right {
    box-sizing: border-box;
    display: flex;
    width: 120px;
    justify-content: space-between;
    .iconfont {
      font-size: 44px;
      color: #00061f;
    }
  }
  @keyframes rote {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export const AudioPlayPageWrapper = styled.View`
  .audio-play-inner {
    height: 100vh;
    background-color: red;
  }
`

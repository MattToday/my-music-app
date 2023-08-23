import { styled } from 'linaria/react'

export const HomeWrapper = styled.View`
  height: 100vh;
  background-color: #f7f8fb;
  button {
    color: red;
  }
  .head {
    position: absolute;
    width: 100%;
    left: 0;
    top: 14rpx;
    height: 52rpx;
    line-height: 52rpx;
  }
  .drawer {
    text-align: center;
    padding-top: 300px;
    color: #999;
  }
  .home-banner {
    margin-top: 34px;
  }
  & & page {
    background-color: red;
  }
`

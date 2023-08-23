import { styled } from "linaria/react";

export const WrapperHomeClassMenu = styled.View`
  display: flex;
  align-items: center;
  height: 170px;
  .menu-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .ico {
      height: 67px;
      .iconfont {
        font-size: 60px;
        color: #e94558;
      }
    }
    .menu-name {
      font-size: 22px;
      color: #545a6c;
      text-align: center;
      height: 32px;
      line-height: 32px;
    }
  }
`

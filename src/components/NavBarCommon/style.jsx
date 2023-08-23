import { styled } from "linaria/react";

export const NavBarWrapper = styled.View`
  width: 100%;
  left: 0;
  top: 0;
  z-index: 500;
  background-repeat: no-repeat;
  background-size: 100% auto;
  .container {
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100% 100%;
    position: relative;
    .center {
      height: 100%;
      .title {
        font-size: 32px;
        text-align: center;
      }
    }
    .left{
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
    }
  }
`

import { styled } from "linaria/react";

export const TabBarWrapper = styled.View`
  position: fixed;
  z-index: 500;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 104px;
  display: flex;
  box-sizing: initial;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  .tabbar__item {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    .tabbar__item_icon-wrapper {
      width: 50px;
      height: 50px;
      background: transparent;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__icon{
      width: 40px;
      height: 40px;
      display: block;
    }
    &__text {
      font-size: 20px;
      color: #333;
    }
    &.active {
      .tabbar__item_icon-wrapper {
        background-color: #74ae3d;
      }
    }
  }
`

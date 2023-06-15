import { styled } from "linaria/react";

export const SearchBarWrapper = styled.View`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 100px;
  .search-bar__inner {
    width: 380px;
    height: 70px;
    border-radius: 35px;
    border: 1px solid #cdc9f5;
    display: flex;
    align-items: center;
    padding-left: 25px;
    color: #999;
  }
  .search__icon {
    margin-right: 10px;
  }
  .search__text {
    line-height: 1;
  }
`

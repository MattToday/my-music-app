/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 10:30:27
 * @LastEditTime: 2019-08-29 10:45:25
 * @LastEditors: Please set LastEditors
 */
import Taro from '@tarojs/taro'

export const formatNumber = (n) => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

// 转换歌词字符串为数组
export const parse_lrc = (lrc_content) => {
  let now_lrc = []; // 声明一个临时数组
  let lrc_row = lrc_content.split("\n"); // 将原始的歌词通过换行符转为数组
  let scroll = true; // 默认scroll初始值为true
  for (let i in lrc_row) {
    if ((lrc_row[i].indexOf(']') === -1) && lrc_row[i]) {
      now_lrc.push({ lrc_text: lrc_row[i] })
    } else if (lrc_row[i] !== '') {
      let tmp = lrc_row[i].split("]")
      for (let j in tmp) {
        scroll = false
        let tmp2 = tmp[j].substr(1, 8)
        let tmp3 = tmp2.split(":")
        let lrc_sec = Number(tmp3[0] * 60 + Number(tmp3[1]))
        if (lrc_sec && (lrc_sec > 0)) {
          let lrc = (tmp[tmp.length - 1]).replace(/(^\s*)|(\s*$)/g, "")
          lrc && now_lrc.push({ lrc_sec: lrc_sec, lrc_text: lrc })
        }
      }
    }
  }
  if (!scroll) {
    now_lrc.sort(function (a, b)  {
      return a.lrc_sec - b.lrc_sec;
    });
  }
  return {
    now_lrc: now_lrc,
    scroll: scroll
  };
}

/**
 * @method 显示加载框
 * @param {Boolean} mask 是否显示蒙层
 * @param {String} title 提示文字
 */
export const showLoading = (title = '加载中...', mask = true) => {
  Taro.showLoading({
    title,
    mask
  })
}

/**
 * @method 隐藏加载框
 */
export const hideLoading = () => {
  Taro.hideLoading()
}

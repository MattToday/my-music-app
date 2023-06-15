import Taro from '@tarojs/taro'
import classname from 'classname'
import { AtIcon } from 'taro-ui'
import { memo, useEffect, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { View } from '@tarojs/components'

import { NavBarWrapper } from './style'

const NavBar = memo(props => {
  const {statusBarHeight, system='ios'} = useMemo(() => Taro.getSystemInfoSync(), [])
  const titleBarHeight = system?.toLowerCase().indexOf('ios') > -1 ? 44 : 48
  const navBarHeight = statusBarHeight + titleBarHeight
  const navbarStyle = {
    height: `${navBarHeight}px`,
    paddingTop: `${statusBarHeight}px`,
    backgroundColor: `rgba(${props.bgColor},${props.bgOpacity})`,
    position: props.isFixed ? 'fixed' : 'relative'
  }
  const containerStyle = { height: `${titleBarHeight}px`}

  const routerLength = Taro.getCurrentPages().length || 1

  const handleBack = () => {
    if (routerLength <= 1) {
      Taro.reLaunch({ url: `/pages/index/index` })
      return
    }
    Taro.navigateBack({ delta: 1 })
  }

  const renderLeftHandle = () => {
    const { renderLeft, isBack } = props
    console.log(renderLeft)
    if (renderLeft) {
      return renderLeft
    }
    if (isBack) {
      return <AtIcon className='back' onClick={handleBack} value='chevron-left' size='26' color='#2a3146'></AtIcon>
    }
  }

  const renderCenter = () => {
    const { title, textColor } = props
    if (props.children) {
      return props.children
    }
    if (title) {
      const titleBoxStyle = {
        color: textColor,
        lineHeight: `${titleBarHeight}px`
      }
      return (
        <View className='title' style={titleBoxStyle}>
          {title}
        </View>
      )
    }
  }
  return (
    <NavBarWrapper className={classname('navbar', props.className)} style={navbarStyle}>
      <View className='container' style={containerStyle}>
        <View style={{ position: 'relative',  height: '100%' }}>
          <View className='left'>{renderLeftHandle()}</View>
          <View className='center'>{renderCenter()}</View>
        </View>
      </View>
    </NavBarWrapper>
  )
})

NavBar.propTypes = {
  isBack: PropTypes.bool,
  textColor: PropTypes.string,
  title: PropTypes.string,
  bgOpacity: PropTypes.number,
  renderLeft: PropTypes.element,
  renderCenter: PropTypes.element,
  isFixed: PropTypes.bool
}

NavBar.defaultProps = {
  isBack: true,
  textColor: '#333333',
  title: '网银云音乐',
  bgOpacity: 1,
  renderLeft: null,
  renderCenter: null,
  isFixed: false
}

export default NavBar;

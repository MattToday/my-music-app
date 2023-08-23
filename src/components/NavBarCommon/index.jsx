import Taro from '@tarojs/taro'
import classname from 'classname'
import { AtIcon } from 'taro-ui'
import { memo, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { View } from '@tarojs/components'

import { NavBarWrapper } from './style'

const NavBarCommon = memo(props => {
  const dispatch = useDispatch()

  const {statusBarHeight, system='ios'} = useMemo(() => Taro.getSystemInfoSync(), [])
  const titleBarHeight = system?.toLowerCase().indexOf('ios') > -1 ? 44 : 48
  const navBarHeight = statusBarHeight + titleBarHeight
  dispatch.app.setNavBarHeight(navBarHeight)
  const navbarStyle = {
    // height: `${navBarHeight}px`,
    paddingTop: `${statusBarHeight}px`,
    backgroundColor: props.bgColor !== 'transparent' ? `rgba(${props.bgColor},${props.bgOpacity})` : 'transparent',
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
    const { renderLeft, isBack, backIconColor } = props
    if (renderLeft) {
      return renderLeft
    }
    if (isBack) {
      return <AtIcon className='back' onClick={handleBack} value='chevron-left' size='26' color={backIconColor}></AtIcon>
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
    <NavBarWrapper
      className={classname('navbar', props.className)}
      style={navbarStyle}
    >
        <View className='container' style={containerStyle}>
          <View style={{ position: 'relative',  height: '100%' }}>
            <View className='left'>{renderLeftHandle()}</View>
            <View className='center'>{renderCenter()}</View>
          </View>
        </View>
      </NavBarWrapper>
  )
})

NavBarCommon.propTypes = {
  isBack: PropTypes.bool,
  textColor: PropTypes.string,
  title: PropTypes.string,
  bgOpacity: PropTypes.number,
  renderLeft: PropTypes.element,
  renderCenter: PropTypes.element,
  isFixed: PropTypes.bool,
  bgColor: PropTypes.string,
  backIconColor: PropTypes.string
}

NavBarCommon.defaultProps = {
  isBack: true,
  textColor: '#333333',
  bgColor: '255, 255, 255',
  title: '网易云音乐',
  bgOpacity: 1,
  renderLeft: null,
  renderCenter: null,
  isFixed: false,
  backIconColor: '#2a3146',
}

export default NavBarCommon;

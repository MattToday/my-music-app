import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import './index.css'
import { memo, useEffect, useState, useMemo } from 'react'
import { View } from '@tarojs/components'
import classname from 'classname'

const SMyTicky = memo((props) => {
  const [height, setHeight] = useState('')
  const [fixed, setFixed] = useState(false)
  let top = 0
  useEffect(() => {
    const query = Taro.createSelectorQuery()
    query.select('.my-tick').boundingClientRect()
    query.exec((res) => {
      console.log(res)
      const h = res[0].height
      top = res[0].top
      setHeight(h)
    })
  }, [])
  const render = useMemo(() => (
    <View className='my-tick' style={{height: height + 'px'}} >
      <View className={classname('tick-wrapper', {'tick-fixed': fixed})} style={{top: props.offsetTop + 'px'}}>
        {props.children}
      </View>
    </View>
  ), [fixed])
  return render
});

export default SMyTicky;

SMyTicky.propTypes = {
  offsetTop: PropTypes.number || PropTypes.string
}

SMyTicky.defaultProps = {
  offsetTop: 0
}

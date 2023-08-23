import { memo, useEffect, useState } from 'react'
import Taro, { getSystemInfoSync, useReady  } from '@tarojs/taro';
import { Canvas, View } from '@tarojs/components'

const ImageNavBar = memo(() => {
  const [canvasWidth, setCanvasWidth] = useState(0)
  const [canvasHeight, setCanvasHeight] = useState(0)
  const [pixelRatio, setPixelRatio] = useState(0)

  const getImg = (src) => {
    return new Promise((reslove) => {
      Taro.getImageInfo({
        src
      }).then((res) => {
        reslove(res)
      })
    })
  }

  const drawImg = (ctx, node, url, ...arg) => {
    return new Promise((resolve) => {
      const img = node.createImage()
      img.src = url
      img.onload = () => {
        ctx.drawImage(img, ...arg)
        resolve()
      }
    })
  }

  const draw = async (ctx, node) => {
    const src = '../../assets/img/1.jpg'
    const { width, height } = await getImg(src)
    drawImg(ctx, node, src, 0, 0, width, height, 0, 0, canvasWidth, canvasHeight)
  }

  useEffect(() => {
    const sysInfo = getSystemInfoSync()
    const { screenWidth, pixelRatio } = sysInfo
    console.log(screenWidth)
    setPixelRatio(pixelRatio)
    setCanvasWidth(screenWidth )
    setCanvasHeight(screenWidth / 1.58)
  }, [])
  useEffect(() => {
    if (!canvasWidth) {
      return
    }
    Taro.createSelectorQuery().select('#canvas').node((res) => {
      console.log(res)
      const { node } = res
      node.width = canvasWidth * pixelRatio
      node.height  = canvasHeight * pixelRatio
      const ctx = node.getContext('2d')
      ctx.scale(pixelRatio, pixelRatio)
      draw(ctx, node)
    }).exec()
  }, [canvasWidth])

  return (
    <View>
      <Canvas type='2d' style={{width: `${canvasWidth}px`, height: `${canvasHeight}px`}} height={canvasHeight} canvasId='canvas' id='canvas' className='canvas'></Canvas>
    </View>
  );
});

export default ImageNavBar;

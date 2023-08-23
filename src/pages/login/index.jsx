import { switchTab } from '@tarojs/taro';
import { memo, useState, useEffect, useMemo } from 'react';
import {
  Button,
  Form,
  FormItem
} from '@antmjs/vantui'
import { Input, View, Image } from '@tarojs/components';
import { getKey, createQr, watchQrState,  getLoginStatue, phoneLogin, sendCode } from '@api/user'
import { setStorage, getStorage } from '@/utils/storage';
import { LoginWrapper } from './style';

const Login = memo(() => {

  const [imgUrl, setImgUrl] = useState()
  const [loginStatue, setLoginStatue] = useState('请扫码登录')
  let timer

  const loginHandle = async() => {
    const cookie = getStorage('cookie')
    // getLoginStatue(cookie)
    const keyInfo = await getKey()
    const { unikey } = keyInfo.data
    const qrInfo = await createQr(unikey)
    const { qrimg } = qrInfo.data
    setImgUrl(qrimg)
    timer = setInterval(async() => {
      const statusRes = await watchQrState(unikey)
      console.log(statusRes)
      if (statusRes.code === 800) {
        setLoginStatue('二维码已过期,请重新获取')
        clearInterval(timer)
      }
      if (statusRes.code === 803) {
        // 这一步会返回cookie
        clearInterval(timer)
        setLoginStatue('授权登录成功')
        await getLoginStatue(statusRes.cookie)
        setStorage('cookie', statusRes.cookie)
        switchTab({ url: '/pages/index/index'})
      }
      if (statusRes.code === 802) {
        setLoginStatue('等待确认')
      }
    }, 6000);
  }
  useEffect(() => {
    loginHandle()
  }, [])

  return (
    <LoginWrapper>
      <View className='qr-wrapper'>
        <Image className='qr-img' src={imgUrl} />
        <View className='qr-text'>{loginStatue}</View>
      </View>
    </LoginWrapper>
  );
});

export default Login;

import requset from '../request'

// 游客登录
export const anonimousLogin = () => {
  return requset.get('/register/anonimous')
}

// 手机登录
export const phoneLogin = data => {
  return requset.get('/login/cellphone', data)
}

// 发送验证码
export const sendCode = (data = {phone: '15238323308'}) => {
  return requset.post('/captcha/sent', data)
}


// 获取登录状态
export const getLoginStatue = () => {
  return requset.post(`/login/status?timestamp=${Date.now()}`)
}

// 刷新登录
export const refreshLoginStatue = () => {
  return requset.get('')
}

// 二维码 key 生成接口
export const getKey = () => {
  return requset.get(`/login/qr/key?timestamp=${Date.now()}`)
}

// 二维码生成接口
export const createQr = (key) => {
  return requset.get(`/login/qr/create?timestamp=${Date.now()}&qrimg=true`, {key})
}

// 二维码检测扫码状态接口
// 轮询此接口可获取二维码扫码状态,800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功(803 状态码下会返回 cookies),如扫码后返回502,则需加上noCookie参数,如&noCookie=true

export const watchQrState = (key) => {
  return requset.get(`/login/qr/check?timestamp=${Date.now()}`, {key}, false)
}

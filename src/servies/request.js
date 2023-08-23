import Taro from '@tarojs/taro'
import { getStorage } from '@utils/storage'
import { showLoading, hideLoading } from '@utils/common'
import { HTTP_STATUS } from '../constants/status.js'
import { logError } from '../utils/error'
import { baseUrl } from '../../config'

const _showLoading = () => {
	showLoading();
}
const _hideLoading = () => {
	hideLoading()
}


export default {
  baseOptions(params, method='GET') {
    const {url, dataType, isLoad} = params
    const defaultContent = {'content-type': 'application/json', 'cookie': getStorage('cookie') || ''}
    const header = params.header ? Object.assign({}, defaultContent, params.header) : defaultContent
    let _isLoad = 'isLoad' in params ? isLoad : !0 // 显示loading
    _isLoad && _showLoading()
    const cookie = getStorage('cookie')
    let data = params.data
    if (cookie && method !== 'GET') {
      data = Object.assign({}, data, {cookie})
    }

    return new Promise((resolve, reject) => {
      const option = {
        url: url.indexOf('http') !== -1 ? url : baseUrl + url,
        data,
        header,
        method: method,
        dataType: dataType || 'json',
        success(res){
          console.log(`【${url}接口返回信息】`, res)
          if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
            logError('api', '请求资源不存在')
            reject(res)
          } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
            logError('api', '服务端出现了问题')
            reject(res)
          } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
            logError('api', '没有权限访问')
            reject(res)
          } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
            // Taro.navigateTo({
            //   url: '/pages/packageA/pages/login/index'
            // })
            logError('api', '请先登录')
            reject(res)
          } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
            resolve(res.data)
          }
          _isLoad && _hideLoading()
        },
        fail(e) {
          logError('api', '请求接口出现问题', e)
          logError(baseUrl)
          logError(url)
          _isLoad && _hideLoading()
          reject(e)
        }
      }
      Taro.request(option)
    })
  },
  get(url, data, isLoad) {
    const option = {url, data, isLoad}
    console.log(option)
    return this.baseOptions(option)
  },
  post(url, data, header) {
    const option = {url, data, header}
    return this.baseOptions(option, 'POST')
  }
}

/* eslint-disable eol-last */
import axios from 'axios'

axios.defaults.baseURL = 'https://open.duyiedu.com'
axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: 'zhouzhou123_1575111325010'
  }
  return config
}, function (error) {
  // 发生错误时做什么
  return Promise.reject(error)
})

// eslint-disable-next-line no-undef
export default axios
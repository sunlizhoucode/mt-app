/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
import axios from '@/axios.js'

var api = {
  searchHotWord (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  getSearchList (params) {
    return axios.get('/api/meituan/header/search.json', params)
  },
  getMenuList (params) {
    return axios.get('/api/meituan/index/nav.json', params)
  },
  getResultProducts () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getProductsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  getHotCity () {
    return axios.get('/api/meituan/city/hot.json')
  },
  getRecentCity () {
    return axios.get('/api/meituan/city/recents.json')
  },
  getProvinceList () {
    return axios.get('/api/meituan/city/province.json')
  },
  getCurPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  getLogin (params) {
    return axios.get('/api/meituan/login', params)
  },
  getRegister (params) {
    return axios.get('/api/meituan/register', params)
  }
}

export default api
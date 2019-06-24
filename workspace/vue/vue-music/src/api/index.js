import Vue from 'vue'
import axios from 'axios'
const vue = new Vue();

// axios配置
axios.defaults.timeout = 10000     //默认请求时间,10s还没请求到就报错
axios.defaults.baseURL = 'http://localhost:3000'

//axois 封装
//返回状态判断
axios.interceptors.response.use((res) => {
  if (res.data.code !== 200) {
    vue.$toast('网络异常')
    vue.$hideLoading()           //要定义两个方法 挂载在原型链上 plugin.js里实现了
    return Promise.reject(res)
  }
  return res
}, (error) => {            //其他拿不到数据的情况 
  vue.$toast('网络异常')
  vue.$hideLoading()   
  return Promise.reject(error)
})

//封装get请求
export function fetchGet(url,param) {
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params: param
    })
    .then(response => {
      resolve(response.data)
    },err => {
      reject(err)
    })
    .catch((error) => {
      reject(err)
    })
  })
}

//封装login方法 用户登录
export default {
  Login(params) {
    return fetchGet('/login',params)
  },
  //banners
  BannerList() {
    return fetchGet('/banner')
  },
  //歌单
  DiscLists(params) {
    return fetchGet('/top/playlist',params)
  },
  //歌单详情
  SongList(params) {
    return fetchGet('/playlist/detail',params)
  },
  //歌曲搜索
  MusicSearch (params) {
    return fetchGet('/search',params)
  }
}

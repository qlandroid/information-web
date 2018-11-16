import axios from 'axios'
import localStroryHelper from './LocalStroryHelper'
// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
// 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
// axios.defaults.baseURL = 'http://192.168.6.131'
axios.defaults.baseURL = 'http://localhost:8091'
axios.defaults.headers = {'Content-Type': 'application/json'};
// 添加请求拦截器x
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (config.method === 'post') {
    config.data = JSON.stringify(config.data)
    // console.log(config.data)
  }

  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
});

// 返回一个Promise(发送get请求)
export function getFetch(url, params) {
  return new Promise((resolve, reject) => {
    var item = localStorage.getItem('X-Access-Authority');
    var header = {};
    if (item) {
      header = localStroryHelper.getToken();
    }

    axios.get(url, {params: params, headers: header})
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

// 返回一个Promise(发送post请求)
export function postFetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

// 返回一个Promise(发送get请求)
export function getFetchUser(url, params) {
  /* 权限控制，需userId */
  const header = localStroryHelper.getToken();

  const userId = localStorage.getItem('userId')
  if (params == null) {
    params = {}
  }
  if (userId) {
    params.userId = userId
  }
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params, headers: header})
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

// 返回一个Promise(发送post请求)
export function postFetchUser(url, params) {
  /* 权限控制，需userId */
  const header = localStroryHelper.getToken();

  if (params == null) {
    params = {}
  }
  return new Promise((resolve, reject) => {
    axios.post(url, params, {headers: header})
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

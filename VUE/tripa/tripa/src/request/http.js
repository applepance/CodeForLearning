import axios from 'axios';
import { stringify } from 'qs';
import { Toast } from "mand-mobile";
import store from '../store/index.js';

let tmpTrip = store.state.trip;

axios.defaults.timeout = 10000;
axios.defaults.withCredentials = false; // 表示跨域请求时是否使用凭证，默认否

// 请求拦截
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token，若存在，则统一请求的header都加上token，这样后台就能根据token判断你的登录状态
    // 即使本地存在token，也可能是过期的，所以要在响应拦截器中对返回的状态进行判断
    config.header['Content-type'] = 'application/X-www-form-unlencoded';
    return config;
  },
  error => {
    Toast.failed('请求过程出错')
    return Promise.error(error);
  }
  
)
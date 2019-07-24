import axios from 'axios';
import Vue from 'vue';

const baseURL = 'http://localhost:3025/api';

const ajax = axios.create({
  baseURL,
  responseType: 'json',
  withCredentials: true
})

export default ajax;
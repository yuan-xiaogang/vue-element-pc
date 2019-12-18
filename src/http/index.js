import axios from 'axios';

import {baseURL} from './config'

const instance = axios.create({
    baseURL: baseURL,
    timeout: 10000
  });
// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  instance.interceptors.response.use((response) => {
      return new Promise((resolve, reject) => {
          console.log(reject)
          resolve(response.data)
      })
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

export default instance
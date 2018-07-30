/**
 * Created by chenyi on 2018/7/30
 * axios设置
 */
'use strict'
import axios from 'axios'
const service = axios.create({
    //  baseURL: '/wap/', // api的base_url
     // timeout: 10000,                  // 请求超时时间
     transformRequest: [function (data) { //请求的参数问题
        //  console.log(data);
     }]
});

//请求拦截器
service.interceptors.request.use(config => {
    if(config.method.toLowerCase() == 'post') {
        // config.params.token = 'sssss';
    }
    return config;
},error => {
    // console.log(error);
    // Promise.reject(error)
});

// respone拦截器
service.interceptors.response.use(
    response => {
        const code = ~~response.data.code;
        const status = response.status;
        if(status == 200){
            return response.data;
        }
});
export default service;


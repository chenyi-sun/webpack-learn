/**
 * Created by Struggle on 2017/9/11.
 * axios拦截处理
 */
'use strict'
import axios from 'axios'
import Vue from 'vue'
import  qs from 'qs'
import { getToken } from './index'
import { ToastPlugin, LoadingPlugin  } from 'vux'

Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
// 创建axios实例
//login/index
const service = axios.create({
    // baseURL: process.env.BASE_API, // api的base_url
    baseURL: '/wap/', // api的base_url
    timeout: 5000,                  // 请求超时时间
    transformRequest: [function (data) {
        data = qs.parse(data)
        if(!("userId" in data)) {
            data.token = getToken() || "a85c0f989ac02edab204c296a396df9e"
        }
        return qs.stringify(data)
    }]
})

// request拦截器
service.interceptors.request.use(config => {
    /*if(document.querySelector('.vux-loading').style.display === 'none') {
        Vue.$vux.loading.show({
            text: '数据加载中...'
        })
    }*/
    // Do something before request is sent
    if(config.method.toLowerCase() == 'get') {
        config.params.token = getToken() || "a85c0f989ac02edab204c296a396df9e"
    }
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
        // Vue.$vux.loading.hide()
        const code = ~~response.data.code
      // #todo 统一处理返回code类型
        if(code !== 200 && code !== 500 && code !== 1006) {
            // 输出错误代码已经对应中文说明
            // console.error('code:'+ code, '说明:'+ codeName[code])
            if(code === 1002 || code === 1010) {
                window.location.href = window.location.origin + window.location.pathname
            }else if(code === 1001 || code === 1005) {
                Vue.$vux.toast.show({
                    text: '账户已禁用',
                    type: 'warn'
                });
            }else {
                // Vue.$vux.toast.text(codeName[code],'middle');
            }
        }
      return response
    },
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
   /*  const res = response.data;
        if (res.code !== 20000) {
          Message({
            message: res.message,
            type: 'error',
            duration: 5 * 1000
          });
          // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
          if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
            MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
              confirmButtonText: '重新登录',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              store.dispatch('FedLogOut').then(() => {
                location.reload();// 为了重新实例化vue-router对象 避免bug
              });
            })
          }
          return Promise.reject('error');
        } else {
          return response.data;
        }*/
    error => {
        // Vue.$vux.loading.hide()
        console.log(error)
        /*Vue.$vux.toast.show({
            text: '请检查网络',
            type: 'warn'
        });*/
        // console.log('err' + error) // for debug
        // return Promise.reject(error)
    }
)

export default service

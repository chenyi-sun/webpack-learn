// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import * as filters from './filters'
import VueLazyload  from 'vue-lazyload'
import './wxConfig'

import Home from './components/HelloFromVux'

import '@/assets/css/common.css'

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: './assets/logo.png',
    loading: './assets/vux_logo.png',
    attempt: 1
})

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})




FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    render: h => h(App)
}).$mount('#app')

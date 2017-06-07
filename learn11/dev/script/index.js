import 'babel-polyfill';

import Vue from 'vue';

import router from '../router';
import store from '../store/index';
import App from '../component/App.vue';

import Platform from './plugin/Platform';
import Sensitive from './plugin/Sensitive';


const app = new Vue({
    router,
    store,
    components: {
        App,
    },
}).$mount('#app');

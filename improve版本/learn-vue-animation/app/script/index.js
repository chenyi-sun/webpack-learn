require('./../css/main.scss');
require('./../css/index.scss');
// require('./all.js');
require('./img');
import Vue from 'vue';
import all from './all.js';
import VueRouter from 'vue-router';
import 'babel-polyfill';
import axios from 'axios'
import Apps from './../components/App.vue'
// import Test from './../components/Test.vue'
import Bottom from './../components/Bottom.vue'
// Vue.use(VueRouter);

// const routes = [
//     { path: '/app', component: Apps},
//     { path: '/test', component: Test},
// ]
// const router = new VueRouter({
//   routes // （缩写）相当于 routes: routes
// });

axios.get('http://apiqinbayou.ztxywy.net/app/service/category/index?openid=ocbOUs4UnYI7uQ4TEOG8Sr3MdsQc')
.then(function(item){
    console.log(item.data);
    var ss = item.data;
    var app = new Vue({
        // router,
        el: '#app',
        data: {
            message: item.data
        },
        methods:{
            ask:function(){
                var self = this;
                console.log(all.id(self));
                console.log(all.router());
            },
            next: function(){
                var self = this;
                all.next(self);
            }
        },
        mounted(){
            this.ask();
            // all.setLocation('ssss','ddd');
            console.log(all.allPath[all.path].base);
        },
         components: {
            'Bottom': Bottom
        }
    })
});
// var ss = {
//     ss:'sss'
// }
// const longChance = ['sss', 'ksksksk'];
// let alls = longChance.map((item) =>  new change(item));
// console.log( Object.assign(...alls));

    // var app = new Vue({
    //     el: '#app',
    //     data: {
    //        sss: 'ssss',
    //     },
    //     components: {
    //         'Apps': Apps
    //     }
    // });


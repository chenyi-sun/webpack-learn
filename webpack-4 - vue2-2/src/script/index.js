require('./../css/index.css');
require('./../less/index.less');
require('./../less/common.less');
import mdin from "./../md/in.js";
import mdout from "./../md/out.js";
import Vue from 'vue';
import VueRouter from 'vue-router';
import timepicker from "./../components/timepicker.vue";
import 'babel-polyfill'
import routes from './../public/router.js'
import fetch from './../public/axios.js';
import $ from './jquery.js'
let  arrs = [];
const  arr1 = ['a', 'b'];
const  arr2 = ['c'];
const  arr3 = ['d', 'e'];

Vue.use(VueRouter);

console.log($('.shoc'));

var value = {
    link1: "link1.ask.name.vue",
    link2: "link2.ask.name.mark.mask",
    link3: "link3.ask.vue.miss"
};

//  var routers = [
//      {
//         path: '/foo', component: Foo
//      },
//      {
//         path: '/bar', component: Bar
//      }
//  ];
 const router = new VueRouter({
     routes
 });

 var app = new Vue({
        // router,
        el: '#app',
        data: {
            name: "ssss",
        },
        router,
        components: {
            timepicker
        }
 });
// axios.post("/wap/weixin/Wxtool/getJsapiSign",{
//     url: "http://192.168.101.140:5002/",
//     token: "a85c0f989ac02edab204c296a396df9e"
// }).then(function(response){
//     console.log(response.data);
// });

 let url = "/wap/weixin/Wxtool/getJsapiSign";
 let params = {
     url: "http://192.168.101.140:5002",
     token: "a85c0f989ac02edab204c296a396df9e"
 };
 let method = "post";

 fetch({ url, params, method }).then(response => {
    //  console.log(response);
 });
arrs = [...arr1, ...arr2, ...arr3];

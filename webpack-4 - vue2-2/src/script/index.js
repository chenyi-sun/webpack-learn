require('./../css/index.css');
require('./../less/index.less');
require('./../less/common.less');
require("./swipe.js")
import mdin from "./../md/in.js";
import mdout from "./../md/out.js";
import Vue from 'vue';
import VueRouter from 'vue-router';
import timepicker from "./../components/timepicker.vue";
import 'babel-polyfill'
import routes from './../public/router.js'
import fetch from './../public/axios.js';
let  arrs = [];
const  arr1 = ['a', 'b'];
const  arr2 = ['c'];
const  arr3 = ['d', 'e'];

Vue.use(VueRouter);

var value = {
    link1: "link1.ask.name.vue",
    link2: "link2.ask.name.mark.mask",
    link3: "link3.ask.vue.miss"
};

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

///Wxtool/getJsapiSign
 let url = "/wap/weixin/Test/index";
 let params = {
     url: "http://192.168.101.140:5002",
     token: "a85c0f989ac02edab204c296a396df9e"
 };
 let method = "get";

 fetch({ url, params, method }).then(response => {
     console.log(response);
 });
arrs = [...arr1, ...arr2, ...arr3];


// window.mySwipe = new Swipe(document.getElementById('slider'), {
//   startSlide: 2,
//   speed: 400,
//   auto: 3000,
//   continuous: true,
//   disableScroll: false,
//   stopPropagation: false,
//   callback: function(index, elem) {},
//   transitionEnd: function(index, elem) {}
// });

require('./../css/index.css');
require('./../less/index.less');
require('./../less/common.less');
import mdin from "./../md/in.js";
import mdout from "./../md/out.js";
import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './../public/router.js'
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
            
        }
 });

// console.log(mdin(value));
console.log(mdout(mdin(value)));

arrs = [...arr1, ...arr2, ...arr3];

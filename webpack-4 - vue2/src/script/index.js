require('./../css/index.css');
require('./../less/index.less');
require('./../less/common.less');
import mdin from "./../md/in.js";
import mdout from "./../md/out.js";
import Vue from 'vue';
let  arrs = [];
const  arr1 = ['a', 'b'];
const  arr2 = ['c'];
const  arr3 = ['d', 'e'];
console.log(Vue);
// document.getElementsByClassName("shoc")[0].velocity({
//     width:"300px",
//     opacity:0
// },"easeInOutSine")
var value = {
    link1: "link1.ask.name.vue",
    link2: "link2.ask.name.mark.mask",
    link3: "link3.ask.vue.miss"
}

 var app = new Vue({
        // router,
        el: '#app',
        data: {
            name: "ssss",
        }
 });
// console.log(mdin(value));
console.log(mdout(mdin(value)));

arrs = [...arr1, ...arr2, ...arr3];

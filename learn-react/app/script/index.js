require('./../css/main.scss');
require('./all.js');
require('./img');
import Vue from 'vue';
import axios from 'axios'
import Apps from './../components/App.vue'

// function change(paremary){
//     this.name = "ss";
//     this.alert = paremary;
// }
// axios.get('http://apiqinbayou.ztxywy.net/app/service/category/index?openid=ocbOUs4UnYI7uQ4TEOG8Sr3MdsQc')
// .then(function(item){
//     console.log(item.data);
//     var ss = item.data;
//     var app = new Vue({
//         el: '#app',
//         data: {
//             message: item.data
//         }
//     })
// });
// var ss = {
//     ss:'sss'
// }
// const longChance = ['sss', 'ksksksk'];
// let alls = longChance.map((item) =>  new change(item));
// console.log( Object.assign(...alls));

    var app = new Vue({
        el: '#app',
        data: {
           sss: 'ssss',
        },
        components: {
            'Apps': Apps
        }
    });


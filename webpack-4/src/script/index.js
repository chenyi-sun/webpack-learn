require('./../css/index.css');
require('./../less/index.less');
require('./../less/common.less');
require("velocity-animate");
let  arrs = [];
const  arr1 = ['a', 'b'];
const  arr2 = ['c'];
const  arr3 = ['d', 'e'];

document.getElementsByClassName("shoc")[0].velocity({
    width:"300px",
    opacity:0
},"easeInOutSine")


arrs = [...arr1, ...arr2, ...arr3];

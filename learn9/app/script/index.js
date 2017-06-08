console.log("sss");
console.log("sssddd");
require('./../css/main.scss');
// require("html-loader!./../html/index.html");


var img = document.getElementById('a');
img.src = require("./../imgs/a.png");
document.body.appendChild(img);

function change(paremary){
    this.name = "ss";
    this.alert = paremary;
}

var ss = {
    ss:'sss'
}
const longChance = ['sss', 'ksksksk'];
let alls = longChance.map((item) =>  new change(item));
console.log( Object.assign(...alls));
console.log("sss");
console.log("sssddd");
require('./../css/main.css');

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
import rule from './mdrule.js';
function mdout(value){ 
    var link = {
        'm': '/\]]]',
        'a': '<<<>>>chenyi'
    }
    var newlink = {};
    var regs = []; //新的规则数组
    for(var item in link){
        newlink[link[item]] = item;
        // var reg = new RegExp("/(\"+ +"\.*?)/","ig");
    }
    
    var reg = /(\/\]]].*?)/ig;
    console.log(value.match(reg));
    console.log(newlink);
    return value;
}
export  default mdout;
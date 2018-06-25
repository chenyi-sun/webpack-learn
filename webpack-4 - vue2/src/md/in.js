import rule from './mdrule.js';
function mdin(value){ //加密输入
    var stri = JSON.stringify(value);
    var str = '';
    var link = rule;
    for(var i in stri){
        var v = stri[i];
        for(var item in link){
            if(v == item){
                v = link[item];
            }
        }
        str = str + v;
    }
    return str;
}
export  default  mdin;
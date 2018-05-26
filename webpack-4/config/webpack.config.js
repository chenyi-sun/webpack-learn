const webpack = require("webpack");
const path = require('path');
const init = require('./define.config');
const dev = require('./dev.config');
const pro = require('./pro.config');
const merge = require('webpack-merge');

const fs = require('fs');

var jsPath = __dirname+'/../src/script';
var jsfiles = fs.readdirSync(jsPath);

let entrys = {};  //入口文件

jsfiles.forEach((item)=>{
    let name = item.replace('.js','');
    entrys[name] = __dirname+'/../src/script/'+name+'.js';
});

var base = {
    entry: entrys,
    output: {
        publicPath: init.htmlJsPath+'script',
        filename: init.isHash?'[name].[chunkhash].js':'[name].js',
        path: __dirname+'/../dist/script'
    },
};

module.exports = (env, argv) => {
    if(argv.mode == "production"){
        return merge(base, pro);
    }
    else{
        return merge(base, dev);
    }
}



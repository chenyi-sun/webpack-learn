const webpack = require("webpack");
const path = require('path');
const init = require('./define.config');
const dev = require('./dev.config');
const merge = require('webpack-merge');
const fs = require('fs');

var jsPath = __dirname+'/../src/script';
var jsfiles = fs.readdirSync(jsPath);


let entrys = {}; 

jsfiles.forEach((item)=>{
    let name = item.replace('.js','');
    entrys[name] = __dirname+'/../src/script/'+name+'.js';
   
});

var base = {
    entry: entrys,
    output: {
        filename: init.isHash?'[name].[hash].js':'[name].js',
        path: __dirname+'/../dist/script'
    }
};

module.exports = (env, argv) => {
    if(argv.mode == "production"){
        return base;
    }
    else{
        return merge(base, dev);
    }
}



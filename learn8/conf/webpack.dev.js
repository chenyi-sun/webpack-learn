'use strict';
const merge = require("webpack-merge");
const webpackBase = require("./webpack.base.config.js");
let export_build;


export_build =merge({
    devServer: {
        contentBase: "./app/html",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新,
        open: true,//自动打开
        // hot: true,//热加载
        // host: '192.168.1.23',
    } 
},webpackBase)
    
module.exports = export_build;
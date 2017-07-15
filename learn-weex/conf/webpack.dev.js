'use strict';
const merge = require("webpack-merge");
const webpackBase = require("./webpack.base.config.js");
let export_build;
const webpack = require('webpack');

export_build =merge({
    devServer: {
        contentBase: "./app/html",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新,
        open: true,//自动打开
        // hot: true,//热加载
        // host: '192.168.1.14',//可以本地测试的IP
    } 
},webpackBase,{
     plugins: [
         new webpack.LoaderOptionsPlugin({
            vue: {
                    loaders: {
                        sass: 'style-loader!css-loader!postcss-loader!sass-loader?indentedSyntax',
                        scss: 'style-loader!css-loader!postcss-loader!sass-loader',
                    },
            }
         })
     ]
})
    
module.exports = export_build;
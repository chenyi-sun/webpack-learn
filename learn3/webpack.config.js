'use strict';
var autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let export_build = {
    // context: __dirname + '/src',
    entry: {
        index: __dirname + "/app/main.js",
        // describe: "./describe.js"
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets:["es2015"],
                    }
                }]
            },
            {
               test: /\.less$/,
               use: ["style-loader","css-loader","less-loader"],
            },
            {
               test: /\.css$/,
               use: ["style-loader","css-loader","postcss-loader"],
            },
            {
                test:/\.html$/,
                use: ["html-loader"],
            },
            {
               test: /\.(sass|scss)$/,
               use: ["style-loader","css-loader","sass-loader"],
            },
        ],
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
     } 
}

module.exports = export_build;
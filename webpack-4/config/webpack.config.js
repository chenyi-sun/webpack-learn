const webpack = require("webpack");
const path = require('path');
const init = require('./define.config');
const dev = require('./dev.config');
const pro = require('./pro.config');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const fs = require('fs');

var jsPath = __dirname+'/../src/script';
var jsfiles = fs.readdirSync(jsPath);

let entrys = {};  //入口文件

jsfiles.forEach((item)=>{
    let name = item.replace('.js','');
    entrys[name] = __dirname+'/../src/script/'+name+'.js';
});

var base = function(mode){
    return {
        entry: entrys,
        output: {
            publicPath: init.htmlJsPath,
            filename: init.isHash?'script/[name].[chunkhash].js':'script/[name].js',
            path: path.resolve(__dirname, './../dist')
        },
        module: {
            rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
               test: /\.css$/,
               use: mode=="production"? //是否是生产环境
                [
                    MiniCssExtractPlugin.loader,
                    {
                            loader: 'css-loader',
                            options:{
                                minimize: init.whitesapce //css压缩
                            }
                    },
                    "postcss-loader"
                ]
                :
                [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ],
            },{
                test: /\.(png|jpg|gif)/,
                use:[{
                    loader:'url-loader',  // url-loader
                    options:{
                        limit:400000, // 是把小于400000B的文件打成Base64的格式
                        outputPath:'images/'  //  把图片打包到指定路径下
                    }
                }]
            },{
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "style-loader",
                    {
                    loader: 'css-loader',
                            options:{
                                minimize: init.whitesapce //css压缩
                            }
                    },
                    "less-loader"
                ]
            }]
        },
    };
}

module.exports = (env, argv) => {
    if(argv.mode == "production"){
        return merge( base(argv.mode), pro);
    }
    else{
        return merge( base(argv.mode),dev);
    }
}



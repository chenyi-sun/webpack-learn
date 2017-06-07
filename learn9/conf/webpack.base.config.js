const path = require("path")
const webpack = require('webpack');
var envirParm =  process.env.NODE_ENV;
const glob = require('glob');
const entrys = {};
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const jsFiles = glob.sync('./app/script/*.js');
jsFiles.map((item)=>{
    var item = './.'+item; 
    entrys[path.basename(item,'.js')] = path.join(__dirname, item);
    }
);
console.log(entrys);
const cssLoader = envirParm==="dev"? {
    test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
}:
 {
        test: /\.css$/,
        loader: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
}

var devSet= {
    entry: {
        "index": path.join(__dirname,"./../app/script/index.js"),
        "second": path.join(__dirname,"./../app/script/second.js")
    },
    output: {
        publicPath: envirParm==="dev"?'/':'./',//除了JS以外的资源文件路径，css,img url等等相对于path的路径
        // publicPath: envirParm==="dev"?'/':'/asset',会在打包文件里面。给所有的路径加上这个比如首页
        // 的script src = ./asset/script/main.js
        path: envirParm==="dev"?path.join(__dirname,'./../app/html'):path.join(__dirname,'./../Public'),//dev构建时候main.js都输出到了html文件夹下,打包以后就输出到Public的script下
        // path: envirParm==="dev"?'/':'/',
        filename: "script/[name].js",//js的相对于path的路径写在这里
        chunkFilename: "script/[name].chunk.js",
    },
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_module/,
            },//es6编译至es5
            cssLoader,//引用css文件编译
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },//编译sass
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },//编译less
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        mimetype: 'image/png',
                    },
                }],
            },
            {
                test: /\.svg/,
                use: [{
                    loader: 'svg-url-loader',
                    options: {
                        limit: 10240,
                        noquotes: true,
                    },
                }],
            },
            ]
    }
}
console.log(devSet.output.filename);
module.exports = devSet;
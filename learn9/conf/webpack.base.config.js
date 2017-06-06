const path = require("path")
const webpack = require('webpack');
var envirParm =  process.env.NODE_ENV;

var devSet= {
    entry: {
        index: path.join(__dirname,"./../app/script/main.js"),
    },
    output: {
        publicPath: envirParm==="dev"?'/':'/asset',//除了JS以外的资源文件路径，css,img url等等相对于path的路径
        path: envirParm==="dev"?path.join(__dirname,'./../app/html'):path.join(__dirname,'./../Public'),//dev构建时候main.js都输出到了html文件夹下,打包以后就输出到Public的script下
        // path: envirParm==="dev"?'/':'/',
        filename: "script/main.js"//js的相对于path的路径写在这里
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
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },//引用css文件编译
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
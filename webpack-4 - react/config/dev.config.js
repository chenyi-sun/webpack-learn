const merge = require("webpack-merge");
const webpack = require("webpack");
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let export_build = {
     devServer: {
        host:'127.0.0.1',
        port:8000,
        open: true,
        // hot: true,
        contentBase: './src',
    },
    output: {
        publicPath: '/',
        filename: './script/'+'[name].js',
    },
    plugins:[
       // 在 HMR 更新的浏览器控制台中打印更易读的模块名称
       new webpack.NamedModulesPlugin(),
       new webpack.HotModuleReplacementPlugin(),
    ],
    // devServer: {
    //     //  contentBase: "./app/html",//本地服务器所加载的页面所在的目录
    //      publicPath: 'dist/', //JS的相对路径
    //      open: true, //自动打开
    //      port: '1234', //端口号
    //      hot: true, //模块热加载
        //  before(app) {
        //       // 当访问 /some/path 路径时，返回自定义的 json 数据
        //       // 可以用于拦截部分请求返回特定内容，或者实现简单的数据 mock。
        //      app.get('/api/test.json', function (req, res) { 
        //         res.json({ code: 200, message: 'hello world' })
        //      })
        // },
        // // proxy: {
        // //     '/login': {
        // //         target: 'http://127.0.0.1:8090',
        // //         changeOrigin: true,
        // //         pathRewrite: {
        // //             '^/login': '/login'
        // //         }
        // //     }
        // // } 
    // }
};

module.exports = export_build;
const merge = require("webpack-merge");
const webpackBase = require("./webpack.base.config.js");
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require("glob");
let export_build;
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const htmlFile = glob.sync('./app/html/*.html');//取的是learn9的文件路径

const allHtml = htmlFile.map((item) => 
    new HtmlWebpackPlugin({
        filename: path.basename(item),
        template: item,
        minify: false,
        // chunks: ['vendors', path.basename(item,'.js')]
    })
);

export_build = merge(webpackBase, {
    plugins: [
        ...allHtml,
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                drop_console: true,
            },
        }),
        // new HtmlWebpackPlugin({
        //    filename: 'index.html',
        //    minify: false,
        // }),
        //查看HtmlWebpackPlugin其他配置http://www.cnblogs.com/wonyun/p/6030090.html
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
        //     chunks: ['index','second'], //提取哪些模块共有的部分
        //     minChunks: 3 // 提取至少3个模块共有的部分
        // }),
         new ExtractTextWebpackPlugin('./css/[name].[contenthash].css'),
        
    ]
});
module.exports = export_build;
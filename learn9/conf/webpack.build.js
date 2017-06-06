const merge = require("webpack-merge");
const webpackBase = require("./webpack.base.config.js");
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
let export_build;


export_build = merge(webpackBase, {
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                drop_console: true,
            },
        }),
        new HtmlWebpackPlugin({
           filename: 'index.html',
           minify: false,
        }),//查看HtmlWebpackPlugin其他配置http://www.cnblogs.com/wonyun/p/6030090.html
    ]
});
module.exports = export_build;
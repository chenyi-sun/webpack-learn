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
        // inject: {
        //     body: true
        // },
        chunks: [path.basename(item).slice(0,-5)]
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
        new ExtractTextWebpackPlugin('./css/[name].[contenthash].css')
    ]
});
module.exports = export_build;
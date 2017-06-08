const merge = require("webpack-merge");
const webpackBase = require("./webpack.base.config.js");
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require("glob");
let export_build;
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const htmlFile = glob.sync('./app/html/*.html');//取的是learn9的文件路径

const chunksName = [];
htmlFile.map((item)=>
    chunksName.push(path.basename(item,'.html'))
);

const allHtml = htmlFile.map((item) => 
    new HtmlWebpackPlugin({
        filename: path.basename(item),
        template: item,
        minify: false,
        // inject: {
        //     body: true
        // },
        chunks: ['vendors',path.basename(item).slice(0,-5)]
    })
);
export_build = merge(webpackBase, {
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            chunks: htmlFile,
            minChunks: 2,
        }),
         ...allHtml,
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                drop_console: true,
            },
        }),
        new ExtractTextWebpackPlugin('./css/[name].[contenthash].css'),
    ]
});
module.exports = export_build;
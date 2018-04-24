const webpack = require("webpack");
const path = require('path');
module.exports = {
    entry: {
        index: './src/index.js',
        vendor: ['lodash']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    optimization: {                             //最优组合
        splitChunks: {                          //分裂块
            chunks: "initial",                  //块: 最初的
            minSize: 0,                         //最小尺寸
            minChunks: 1,                       
            maxAsyncRequests: 1,
            maxInitialRequests: 1,
            name: () => {},
            cacheGroups: { 
                priority: "0",
                vendor: {
                    chunks: "initial",
                    test: /react|lodash/,
                    name: "vendor",
                    reuseExistingChunk: true    //可设置是否重用该chunk（查看源码没有发现默认值）//再使用存在的模块
                }
            }
        }
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        chunkFilename: "[name].chunk.js"
    }
}
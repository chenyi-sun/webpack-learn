'use strict';

const webpack = require("webpack");

module.exports = {
    context: __dirname + '/src',
    entry: {
        index: "./index.js",
        describe: "./describe.js"
    },
    output: {
        path: __dirname + '/index/dist',
        filename: '[name].bundle.js',
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets:["es2015"]
                    }
                }]
            }
        ]
    },
    plugins: [
         new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js",
            minChunks: 2,
        }),
    ],
    devServer: {
        contentBase: __dirname + '/index'
    }
}
const path = require("path")

module.exports = {
    entry: {
        index: path.join(__dirname,"./../app/script/main.js"),
    },
    output: {
        path:  path.join(__dirname,'./../public'),
        filename: 'main.js'
    },
    module: {
        // rules: [
        //     {
        //         test: /\.js(x)?$/,
        //         use: [
        //             'babel-loader',
        //         ]
        //     },
        //     {
        //         test: /\.css$/,
        //         use: [
        //             'style-loader',
        //             'css-loader',
        //         ],
        //     },
        //     {
        //         test: /\.scss$/,
        //         use: [
        //             'style-loader',
        //             'css-loader',
        //             'sass-loader',
        //         ],
        //     },
        //     {
        //         test: /\.(jpg|jpeg|png|gif)$/,
        //         use: [{
        //             loader: 'url-loader',
        //             options: {
        //                 mimetype: 'image/png',
        //             },
        //         }],
        //     },
        //     {
        //         test: /\.svg/,
        //         use: [{
        //             loader: 'svg-url-loader',
        //             options: {
        //                 limit: 10240,
        //                 noquotes: true,
        //             },
        //         }],
        //     },
        //     ]
    }
}
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: 'development',
    entry: {
        index: './src/script/index.js',
        // about: './src/about.js'
    },
    output: {
        publicPath: './',
        path: path.resolve(__dirname, './../dist'),
        filename: 'script/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
        　　  　　 MiniCssExtractPlugin.loader,
        　　 　　  "css-loader",
       　　      ]
            },
        ]
    },
    resolve: {
        alias: {
            
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
                filename: './index.html',
                template: __dirname+'./../src/index.html',
                chunks: ['index']
        }),
        new MiniCssExtractPlugin({
        　　filename: "css/[name].[chunkhash:8].css",
        　　chunkFilename: "css/[id].css",
    　　})
    ],
};

// for (var page in module.exports.entry) {
//     module.exports.plugins.push(new HtmlWebpackPlugin({
//         filename: page + '.html',
//         template: './template.html',
//         chunks: [page]
//     }));
// }
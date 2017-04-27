'use strict';
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
let export_build;
if(process.env.NODE_ENV === 'production'){
   export_build = {
        // context: __dirname + '/src',
        entry: {
            index: __dirname + "/app/main.js",
            // describe: "./describe.js"
        },
        output: {
            path: __dirname + '/public',
            filename: 'bundle.js',
        },
        module:{
            rules: [
                {
                    test: /\.js$/,
                    use: [{
                        loader: "babel-loader",
                        options: {
                            presets:["es2015"],
                        }
                    }]
                },
                {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"]
                    }),
                },
                {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                    })
                },
                {
                    test:/\.html$/,
                    use: ["html-loader"],
                },
                {
                test: /\.(sass|scss)$/,
                // use: ["style-loader","css-loader","sass-loader"],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"]
                    }),
                },
            ],
        },
        plugins: [
            new ExtractTextPlugin({
                filename: "[name].bundle.css",
                allChunks: true,
            }),
        ],
        devServer: {
            contentBase: "./public",//本地服务器所加载的页面所在的目录
            historyApiFallback: true,//不跳转
            inline: true//实时刷新
        } 
    }
}
if (process.env.NODE_ENV === 'dev'){
    console.log('elseexport_build');
     export_build = {
        // context: __dirname + '/src',
        entry: {
            index: __dirname + "/app/main.js",
            // describe: "./describe.js"
        },
        output: {
            path: __dirname + '/public',
            filename: 'bundle.js',
        },
        module:{
            rules: [
                {
                    test: /\.js$/,
                    use: [{
                        loader: "babel-loader",
                        options: {
                            presets:["es2015"],
                        }
                    }]
                },
                {
                test: /\.less$/,
                use: ["style-loader","css-loader","less-loader"],
                },
                {
                test: /\.css$/,
                use:["style-loader", "css-loader"],
                },
                {
                    test:/\.html$/,
                    use: ["html-loader"],
                },
                {
                test: /\.(sass|scss)$/,
                use: ["style-loader","css-loader","sass-loader"],
                },
            ],
        },
        devServer: {
            contentBase: "./public",//本地服务器所加载的页面所在的目录
            historyApiFallback: true,//不跳转
            inline: true//实时刷新
        } 
    }
    
}
module.exports = export_build;
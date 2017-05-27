'use strict';
//http://www.duanliang920.com/learn/web353.html
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
let export_build;
if(process.env.NODE_ENV === 'production'){
   export_build = {
        // context: __dirname + '/src',
        entry: {
            index: __dirname + "/app/main.js",
            // hello: __dirname + "/app/hello.js",
            // describe: "./describe.js"
        },
        output: {
            path: __dirname + '/public',
            filename: '[name].[hash:2].js',
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
                    use: ["css-loader","postcss-loader", "less-loader"]
                    }),
                },
                {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader',"postcss-loader"]
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
                    use: ["css-loader","postcss-loader", "less-loader"]
                    }),
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    use: ['file-loader'],
                }  
            ],
        },
        plugins: [
            new ExtractTextPlugin({
                filename: "[name].bundle.css",
                allChunks: true,
            }),
            new HtmlWebpackPlugin({
              template:'index.html',
              inject: 'body',
            }),
        ],
        devServer: {
            // contentBase: "./",//本地服务器所加载的页面所在的目录
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
                use: ["style-loader","css-loader","postcss-loader","less-loader"],
                },
                {
                test: /\.css$/,
                use:["style-loader", "css-loader","postcss-loader"],
                },
                {
                    test:/\.html$/,
                    use: ["html-loader"],
                },
                {
                test: /\.(sass|scss)$/,
                use: ["style-loader","css-loader","postcss-loader","sass-loader"],
             },
             {
                test: /\.(png|jpg|gif|svg)$/,
                use: ['file-loader'],
             }
            ],
        },
        devServer: {
            // contentBase: "./pages",//本地服务器所加载的页面所在的目录
            historyApiFallback: true,//不跳转
            inline: true//实时刷新
        },
    }

}
module.exports = export_build;

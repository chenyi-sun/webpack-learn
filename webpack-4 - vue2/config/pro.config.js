const fs = require('fs');
const path = require('path');
const init = require('./define.config');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin") 
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const copyWebpackPlugin= require("copy-webpack-plugin");
const webpack= require("webpack");
const { VueLoaderPlugin } = require('vue-loader');

const htmlPath = __dirname+'/../src';
const htmlFiles = fs.readdirSync(htmlPath);
const plugins = [];

plugins.push(
    new CleanWebpackPlugin(
         ['*.js','*.css'],
         {
             root: __dirname+'./../dist/script', //根目录
             dry: false //启用删除文件
         }
    )  
);
plugins.push(
    new CleanWebpackPlugin(
         ['*.js','*.css'],
         {
             root: __dirname+'./../dist/css', //根目录
             dry: false //启用删除文件
         }
    )  
);
plugins.push(new CleanWebpackPlugin(
         ['*.js','*.css','*.html'],
         {
             root: __dirname+'./../dist', //根目录
             dry: false //启用删除文件
         }
    ) 
);
plugins.push(new copyWebpackPlugin([{
     from:__dirname+'./../src/public', // 要打包的静态资源目录地址
     to:'./public' // 要打包到的文件夹路径，跟随output配置中的目录
}]));
htmlFiles.forEach((item)=>{
    if(item.indexOf('html')>0){
          plugins.push(
            new htmlWebpackPlugin({
                filename: './'+item,
                template: __dirname+'./../src/'+item,
                inject: true,
                chunks: init.isHash?[item.replace('.html',''),'vendor']:['vendor'],
                minify: { // 压缩 HTML 的配置
                    minifyCSS: true, // 压缩 HTML 中出现的 CSS 代码
                    minifyJS: true, // 压缩 HTML 中出现的 JS 代码
                    removeComments: true,   // 移除注释
                    collapseWhitespace: init.whitesapce,//是否去除空格
                    removeAttributeQuotes: true // 移除属性引号
                },
                excludeChunks: [],//允许跳过某些块，(比如，跳过单元测试的块)
                cache: init.htmlcache//是否需要缓存，如果填写true，则文件只有在改变时才会重新生成
            })
         );
    }
});
// plugins.push(
//      require('autoprefixer')
// );
plugins.push(
    new MiniCssExtractPlugin({
    　　filename:  init.isHash?"css/[name].[chunkhash:8].css":"css/[name].css",
    　　chunkFilename: "css/[id].css",
　　})
);
plugins.push(
    new VueLoaderPlugin()
);
let export_production;
export_production = {
     plugins: plugins,
     optimization: { //提取公共代码
        splitChunks: {
             cacheGroups: {
                  vendor: {
                      chunks: "initial",
                      name: "vendor",
                      enforce: true,
                      minChunks: 2, 
                  }
             }
        }
     },
};

module.exports = export_production; //生产环境
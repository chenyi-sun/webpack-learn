const fs = require('fs');
const path = require('path');
const init = require('./define.config');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const htmlPath = __dirname+'/../src';
const htmlFiles = fs.readdirSync(htmlPath);
const plugins = [];

plugins.push(
    new CleanWebpackPlugin(
         ['*.js'],
         {
             root: __dirname+'/../dist/script', //根目录
             dry: false //启用删除文件
         }
    )   
);
htmlFiles.forEach((item)=>{
    if(item.indexOf('html')>0){
          plugins.push(
            new htmlWebpackPlugin({
                filename: './../'+item,
                template: __dirname+'/../src/'+item,
                inject: true,
                // name: 'sss',
                chunks: init.isHash?[item.replace('.html','')]:[],
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


let export_production;
export_production = {
     plugins: plugins,
};

module.exports = export_production; //生产环境
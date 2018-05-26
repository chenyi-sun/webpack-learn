const fs = require('fs');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const htmlPath = __dirname+'/../src';
const htmlFiles = fs.readdirSync(htmlPath);
const plugins = [];

htmlFiles.forEach((item)=>{
    if(item.indexOf('html')>0){
          plugins.push(
            new htmlWebpackPlugin({
                filename: './../'+item,
                chunks:[item.replace('.html','')]
            })
         );
    }
});

let export_production;
export_production = {
     plugins: plugins,
};

module.exports = export_production; //生产环境
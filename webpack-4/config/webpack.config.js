const webpack = require("webpack");
const path = require('path');
const init = require('./define.config');
const dev = require('./dev.config');
const merge = require('webpack-merge');

var base = {
    entry: {
        index: __dirname+'/../src/index.js',
        one: __dirname+'/../src/one.js',
        vendors: __dirname+'/../src/vendors.js'
    },
    output: {
        filename: init.isHash?'[name].[hash].js':'[name].js',
        path: __dirname+'/../dist'
    }
};

module.exports = (env, argv) => {
    if(argv.mode == "production"){
        return base;
    }
    else{
        return merge(base, dev);
    }
}
// if(argv.mode == "development"){
//     module.exports = base;
// }
// else{
//     module.exports = merge(base, dev);
// }


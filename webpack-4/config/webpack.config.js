const webpack = require("webpack");
const path = require('path');
const init = require('./define.config');

module.exports = {
    mode: 'development',
    entry: {
        index: __dirname+'/../src/index.js',
        one: __dirname+'/../src/one.js',
        vendors: __dirname+'/../src/vendors.js'
    },
    output: {
        filename: init.base.isHash?'[name].[hash].js':'[name].js',
        path: __dirname+'/../dist'
    }
} 


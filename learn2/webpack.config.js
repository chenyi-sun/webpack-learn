var path = require('path');
module.exports = {
    entry: './app/all.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
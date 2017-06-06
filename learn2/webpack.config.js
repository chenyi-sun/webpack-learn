var path = require('path');
module.exports = {
    entry: './app/all.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules: [
            {
                test: /\.less$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "less-loader"}
                    ],
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        contentBase: path.join(__dirname, "./"),
        compress: true,
        port: 9005,
        hot: true,
    }
}
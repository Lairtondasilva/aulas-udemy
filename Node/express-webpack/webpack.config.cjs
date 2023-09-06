const path = require('path');

console.log(__dirname)
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'frontend', 'assets', 'main.js'),
    output: {
        path: path.resolve(__dirname, 'public','assets', 'js'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        },{
            exclude: /node_modules/,
            test: /.css$/,
            use: ["style-loader", "css-loader"]
        }]
    },
    devtool: "source-map"
}
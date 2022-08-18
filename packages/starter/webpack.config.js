const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.jsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        rules: [{
         loader: 'babel-loader',
         test: /\.jsx?$/,
         exclude: /node_modules/
        }]
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    },
    plugins:[
        new HWP({template: path.join(__dirname,'/public/index.html')})
    ],
};

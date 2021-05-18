'use strict';

var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js')
    ],
    cache: true,
    devtool: 'cheap-module-source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.less/,
                loaders: [ 'style', 'css', 'less' ]
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    }
};

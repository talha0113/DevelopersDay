var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.config');
var path = require('path');

module.exports = webpackMerge(commonConfig, {

    entry: {
        'CalculatorApplication': ['./Source/main.ts']
    },

    output: {
        path: path.resolve(process.cwd() + '/Distribution'),
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        chunkFilename: '[id].[name].chunk.js',
        pathinfo: true
    },

    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map'
        }),
        new HtmlWebpackPlugin({
            title: 'Calculator Application',
            filename: './Pages/Default.html',
            template: './Pages/Default-Template.ejs',
            inject: true
        })
    ],

});
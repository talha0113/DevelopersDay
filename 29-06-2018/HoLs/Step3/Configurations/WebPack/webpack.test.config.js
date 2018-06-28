var commonConfig = require('./webpack.common.config');
var webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.(ts)?$/,
                enforce: "post",
                exclude: [/\.(spec|e2e)\.ts$/],
                use: [
                    {
                        loader: 'istanbul-instrumenter-loader',
                        query: {
                            esModules: true
                        }
                    }
                ]
            }
        ]
    }

});
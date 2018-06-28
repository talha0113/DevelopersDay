var webpack = require('webpack');

module.exports = {
   
    resolve: {
        extensions: [
            '.ts',
            '.js'
        ]
    },
            
    module: {
        rules: [            
            {
                test: /\.ts?$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: { configFileName: './tsconfig.json' }
                    }
                ]
            },
            {
                test: /\.(js)$/,
                enforce: 'pre',
                use: [
                    { loader: 'source-map-loader' }
                ]
            }
        ]
    }
};
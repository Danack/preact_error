const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');


// const WebpackModules = require('webpack-modules');
//

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            './tsx/bootstrap.tsx',
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(mp3)$/i,
                loader: 'file-loader',
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
            }
        }
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: '[name].bundle.js'
    },
    performance: {
        hints: false,
        // hints: process.env.NODE_ENV === 'production' ? "warning" : false
    },
    plugins: [
        new CompressionPlugin(),
        // new WebpackModules(),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        "alias": {
            "react": "preact/compat",
            "react-dom": "preact/compat",
            // "react": "preact-compat",
            // "react-dom": "preact-compat",
            "react-dom/test-utils": "preact/test-utils"//,

        }
    },
};
const webpack = require('webpack')
const path = require('path')

let isPro = process.env.NODE_ENV === 'production'

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        path: path.resolve(__dirname, '../output/')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'public/image/[name].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            "@": path.resolve(__dirname, "../src"),
            "~config": path.resolve(__dirname, "../config"),
        }
    },
    plugins: []
}
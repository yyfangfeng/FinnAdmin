const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
        path.resolve(__dirname, '../src/main.js')
    ],
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['env'],
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
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
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html')
        })
    ]
}
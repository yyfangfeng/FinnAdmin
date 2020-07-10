const express = require('express')
const app = express()
const webpack = require('webpack')
const path = require('path')
const config = require('./webpack.dev.js')
const compiler = webpack(config)

app.use('/public', express.static(path.resolve(__dirname, '../src/public')))

const port = 3000

const WebpackDevMiddleware = require('webpack-dev-middleware')
const WebpackHotMiddleware = require('webpack-hot-middleware')

app.use(WebpackDevMiddleware(compiler))
app.use(WebpackHotMiddleware(compiler))

app.listen(port, function(){
    console.log('端口号为：3000')
})
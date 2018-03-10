const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const extractStyle = new ExtractTextPlugin('./app/dist/style.css')
const html = new HtmlWebpackPlugin({template:'./app/render/index.html'})

module.exports = {
    target:'electron-renderer',
    devtool: 'source-map',
    entry:'./app/render/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'app/dist'),
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                include: /(app|antd)/,
                use:extractStyle.extract({use:[{loader:'css-loader'},{loader:'style-loader'}]})
            },
            {
                test:/\.less$/,
                exclude: /(node_modules|bower_components)/,
                use:extractStyle.extract({use:[{loader:'css-loader'},{loader:'less-loader'}]})
            },
            {
                test:/\.js$/,
                include: /render/,
                use:'babel-loader'
            },
            {
                test:/\.ejs$/,
                include: /render/,
                use:'babel-loader'
            },
            {
                test:/\.(png|jpg|gif|bmp|svg|ico)$/,
                exclude: /node_modules/,
                use:'url-loader'
            }
        ]
    },
    plugins:[
        html,
        extractStyle,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            checkCtx:'"http://prev.bqj.cn/index.html#/content_list_original"',
            staticCtx:'"http://static.bqj.cn"',
            // ctx:'"https://dapi.bqj.cn/api"',
            // ctx:'"https://api.bqj.cn/api"',
            // ctx:'"https://tapi.bqj.cn/api"',
            // ctx:'"https://preapi.bqj.cn/api"',
            // ctx:'"http://124.204.50.154:8098/api"',
            // ctx:'"https://preapi.bqj.cn/api"',
            // ctx:'"http://192.168.10.23:8080/api"',//方方
            // ctx:'"http://192.168.10.25:8088/api"'
            // ctx:'"http://192.168.10.31:8080/api"'
            // ctx:'"http://192.168.10.22:8080/api"'
            ctx:'"http://192.168.10.28:8080/api"', //庆庆

        }),
        new webpack.ProvidePlugin({
            _: "underscore"
        }),
    ],
    devServer: {
        port:7000
    }
}
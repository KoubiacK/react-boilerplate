var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        //publicPath: 'http://vps311287.ovh.net/koub-react/' //prod OVH
        publicPath: '/dist/' //dev
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('development')
      }
    }),
        new CopyWebpackPlugin([
          {
            from: path.join(__dirname, 'src/api'),
            to: 'api/'
          }
        ])
    ],
    module: {
        loaders: [
            {
              test: /\.js$/,
              loaders: ['react-hot', 'babel'], exclude: /node_modules/,
              include: path.join(__dirname, 'src')},
            {
              test: /\.jsx?$/,
              loaders: ['react-hot', 'babel'],
              exclude: /node_modules/,
              include: path.join(__dirname, 'src')
            },
            {
              test: /\.css$/,
              loader: 'style-loader!css-loader',
              exclude: /node_modules/, include: path.join(__dirname, 'src')
            },
            {
              test: /\.scss$/,
              loader: 'style!css!sass'
            },
            // the url-loader uses DataUrls.
            // the file-loader emits files.
            { test: /\.(woff|woff2)$/,  loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf$/, loader: 'file-loader' },
            { test: /\.eot$/, loader: 'file-loader' },
            { test: /\.svg$/, loader: 'file-loader' }
        ]
    }
};

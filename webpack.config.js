var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.jsx',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
        /*publicPath: '/static/'*/ // -> permet de linker le bundle dans un fake directory "static"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
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
              include: path.join(__dirname, 'src')},
            //{ test: /\.json$/,  loaders: 'json-loader', exclude: /node_modules/, include: path.join(__dirname, 'src')}, // json-loader >> bug quand on active cette ligne
            {
              test: /\.css$/,
              loader: "style-loader!css-loader",
              exclude: /node_modules/, include: path.join(__dirname, 'src') }, // css compiler

            // the url-loader uses DataUrls.
            // the file-loader emits files.
            { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf$/, loader: "file-loader" },
            { test: /\.eot$/, loader: "file-loader" },
            { test: /\.svg$/, loader: "file-loader" }
        ]
    }
};

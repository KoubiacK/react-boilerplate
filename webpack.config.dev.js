let CopyWebpackPlugin = require('copy-webpack-plugin')
let path = require('path')
let webpack = require('webpack')

module.exports = {
  devtool: '#eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('development') }
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'src/api'),
        to: '/dist/api/'
      }
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css!sass'
      },
      // the url-loader uses DataUrls.
      // the file-loader emits files.
      { test: /\.(woff|woff2)$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff', exclude: /node_modules/ },
      { test: /\.ttf$/, loader: 'file-loader', exclude: /node_modules/ },
      { test: /\.eot$/, loader: 'file-loader', exclude: /node_modules/ },
      { test: /\.svg$/, loader: 'file-loader', exclude: /node_modules/ }
    ]
  }
}

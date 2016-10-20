let CopyWebpackPlugin = require('copy-webpack-plugin')
let path = require('path')
let webpack = require('webpack')
module.exports = {
  devtool: 'eval',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    //publicPath: 'http://vps311287.ovh.net/koub-react/' //prod OVH
    publicPath: 'http://localhost/lab/koub-react/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'src/api/'),
        to: 'api/'
      },
      {
        from: path.join(__dirname, 'src/assets'),
        to: 'assets/'
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
        exclude: /node_modules/, include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
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

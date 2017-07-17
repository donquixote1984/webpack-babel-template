var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: ['./index.js']
  },
  output: {
    filename: 'dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool:'source-map',
 plugins: [new HtmlWebpackPlugin({
  template:'index.html'
 })],
  devServer: {
    compress: true,
    port: 9000
  }
}
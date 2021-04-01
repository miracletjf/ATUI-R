const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './lib/index.tsx',
  output: {
    filename: 'atui.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ATUI',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        loader: 'awesome-typescript-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ATUI--React',
      template: 'index.html'
    })
  ]
};
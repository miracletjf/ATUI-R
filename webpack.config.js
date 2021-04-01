const path = require('path');

module.exports = {
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
  }
};
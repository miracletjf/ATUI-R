const path = require('path');

module.exports = {
  entry: './lib/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
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
'use strict';

const Path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    '.': './src/index.js',
    './pages/popup/dist': './src/pages/popup/src/index.js',
  },
  output: {
    path: Path.join(__dirname, 'dist'),
    filename: '[name]/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: './src',
        from: './**/*',
      },
    ], {
      ignore: [
        '**/src/**',
        'index.js',
        'index.jsx',
      ],
    }),
  ],
};

const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
          {
            presets:['react'],
            plugins: [
              'transform-class-properties',
              'transform-object-rest-spread'
            ]
          }
      },
    ],
  },
  resolveLoader: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  devServer: {
    contentBase: 'src',
    inline: true,
    publicPath: '/build'
  }
};

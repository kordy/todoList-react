var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    contentBase: [
      path.join(__dirname, './build')
    ]
  },
  plugins: [
    new webpack.OldWatchingPlugin(),
    devtool: "eval-cheap-module-source-map"
  ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  }
};

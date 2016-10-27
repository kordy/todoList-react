var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
    new ExtractTextPlugin('style.css',{allChunks: true})  //выносим css в отельный файл, allChunks - запаковывает в этот файл все стили, даже те которые подгружаются динамически через require.ensurance
  ],
  devtool: "eval-cheap-module-source-map",
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.less$/,
        include: /src/,
        loader: ExtractTextPlugin.extract('style-loader','css!less') //этот плагин нужен, чтобы выносить css в отельный файл, первый параметр указывает на loader который будет использоваться если стили остались в js (например подгужаются через require.insurence)
      },
    ]
  }
};

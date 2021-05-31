/* eslint-disable no-mixed-spaces-and-tabs */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const env =
	process.env.NODE_ENV === 'production'
	  ? new webpack.EnvironmentPlugin({ ...process.env })
	  : new Dotenv()

const isProd = 'production'
module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js'
  },
  devtool: isProd ? false : 'source-maps',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.s(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.(png|jpeg|svg|gif)$/, use: 'file-loader' }
    ]
  },
  devServer: {
    contentBase: 'src',
    hot: true,
    open: true,
    port: 8000,
    watchContentBase: true,
    proxy: {
      '/api': 'http://localhost:4000'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // '@babel/plugin-proposal-class-properties',
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    env
  ]
}

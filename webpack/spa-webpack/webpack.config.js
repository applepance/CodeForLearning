const path = require('path');
const glob = require('glob');
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            // options: {
            //   modules: {
            //     localIdentName: '[name]_[local]--[hash:base64:5]'
            //   }
            // }
          }
        ]
      }
    ]
  },
  plugins: [
    new WebpackDeepScopeAnalysisPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    // new ExtractTextPlugin('[name].[contenthash].css'),
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync(path.join(__dirname, './src/index.html'))
    })
  ]
}
module.exports = webpackConfig
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appPath = require('./app-path.config');

/**
 * Plugins
 */

const buildIndexHtml = new HtmlWebpackPlugin({
  template: appPath.indexHtml,
});

/**
 * Config
 */

module.exports = {
  entry: appPath.render,
  output: {
    path: appPath.publicDir,
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  plugins: [
    buildIndexHtml,
  ],
};

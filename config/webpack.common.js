const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const appPath = require('./app-path.config');

/**
 * Plugins
 */

const buildIndexHtml = new HtmlWebpackPlugin({
  template: appPath.indexHtml,
});

const miniCssExtract = new MiniCssExtractPlugin({
  filename: '[name].[hash:8].css',
  ignoreOrder: true,
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
      {
        test: /\.css$/i,
        include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        include: appPath.sourceDir,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: 'camelCase',
                localIdentName: '[local]_[hash:base64:6]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                  ],
                ],
              },
            },
          },
          {
            loader: 'less-loader',
          },
          {
            loader: 'style-resources-loader',
            options: {
              patterns: appPath.styleResources,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    buildIndexHtml,
    miniCssExtract,
  ],
};

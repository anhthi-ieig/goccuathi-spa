const CopyPlugin = require('copy-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackCommon = require('./webpack.common');

//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: P L U G I N S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

const copyPlugin = new CopyPlugin({
  patterns: [
    {
      from: 'src/assets',
      to: 'src/assets',
    },
  ],
});

const compressionPlugin = new CompressionWebpackPlugin({
  test: /\.html$|\.js$|\.css$|\.jpg$|\.png$\.svg$/,
  filename: '[path][base].br',
  algorithm: 'brotliCompress',
});

const cssMinimizerPlugin = new CssMinimizerPlugin();
const cleanPlugin = new CleanWebpackPlugin();

//
// ──────────────────────────────────────────────────── I ──────────
//   :::::: C O N F I G : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//

module.exports = merge(webpackCommon, {
  mode: 'production',
  plugins: [
    copyPlugin,
    compressionPlugin,
    cleanPlugin,
  ],
  optimization: {
    minimize: true,
    minimizer: [
      cssMinimizerPlugin,
    ],
  },
});

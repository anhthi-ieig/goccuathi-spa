const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const webpackCommon = require('./webpack.common');

//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: P L U G I N S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

const isLaunchAnalyzer = false;
const bundleAnalyzerPlugin = new BundleAnalyzerPlugin();
const plugins = isLaunchAnalyzer ? [
  bundleAnalyzerPlugin,
] : undefined;

//
// ──────────────────────────────────────────────────── I ──────────
//   :::::: C O N F I G : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//

module.exports = merge(webpackCommon, {
  devtool: 'inline-source-map',
  mode: 'development',
  plugins,
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
});

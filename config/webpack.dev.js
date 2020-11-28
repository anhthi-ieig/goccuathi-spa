const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const webpackCommon = require('./webpack.common');

//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: P L U G I N S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

const isLaunchMonitor = true;
const bundleAnalyzerPlugin = isLaunchMonitor
  ? new BundleAnalyzerPlugin()
  : undefined;

//
// ──────────────────────────────────────────────────── I ──────────
//   :::::: C O N F I G : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//

module.exports = merge(webpackCommon, {
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
    bundleAnalyzerPlugin,
  ],
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
});

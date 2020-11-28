const CopyPlugin = require('copy-webpack-plugin');
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
    cleanPlugin,
  ],
});

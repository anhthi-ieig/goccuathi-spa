const fs = require('fs');
const path = require('path');

const rootDir = fs.realpathSync(process.cwd());

module.exports = {
  /**
   * Render
   */

  render: path.join(rootDir, 'render.js'),

  /**
   * Index HTML
   */

  indexHtml: path.join(rootDir, 'index.html'),

  /**
   * Style Resources
   */

  styleResources: path.join(rootDir, 'src/styles/resources.less'),

  /**
   * PostCss
   */

  postCss: path.join(rootDirectory, 'config/postcss.config.js'),

  /**
   * Public Dir
   */

  publicDir: path.join(rootDir, 'public'),

  /**
   * Source Dir
   */

  sourceDir: path.join(rootDir, 'src'),
};
const webpack = require('webpack');
const { resolve } = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./common.config.js');

const commonConfig = common.config;
const baseDir = common.paths.baseDir;

module.exports = (env = 'development') => {
  const adminConfig = {
    entry: [
      './admin/index.js',
    ],
    output: {
      filename: 'bundle.js',
      path: resolve(baseDir, 'admin-build'),
      publicPath: '/',
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env),
      }),
      new HtmlWebpackPlugin({
        template: `${baseDir}/src/admin/index.tmpl.html`,
        filename: 'index.html',
        inject: 'body',
      }),
      new ExtractTextPlugin({
        filename: './styles/bundle-[hash].css',
        disable: false,
        allChunks: true,
      }),
    ],
  };

  try {
    const envConfigFile = `./webpack.${env}.config`;

    return merge(adminConfig, commonConfig, require(envConfigFile));
  } catch (err) {
    console.log(`Config file for ${env} doesn't exist`);
  }
};

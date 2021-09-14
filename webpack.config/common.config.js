/* eslint-disable import/no-extraneous-dependencies */
const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseDir = resolve(__dirname, '..');

module.exports = {
  paths: {
    baseDir,
  },

  config: {
    context: resolve(baseDir, 'src'),

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loaders: [
            'babel-loader',
            'eslint-loader',
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.(scss|css)$/,
          // exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              {
                loader: 'sass-loader',
                query: {
                  sourceMap: true,
                },
              },
            ],
            publicPath: '../',
          }),
        },
        {
          test: /\.(eot|mp4)(\?v=\d+.\d+.\d+)?$/,
          use: 'file-loader?&name=fonts/[name]-[hash].[ext]',
        },
      ],
    },
  },
};

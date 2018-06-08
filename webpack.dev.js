const path = require('path');
const config = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge(config, {
  devServer: {
    contentBase: path.resolve(__dirname, `dist`),
    watchContentBase: true,
    port: 7000,
    stats: 'errors-only',
    open: true,
    compress: true
  },
  devtool: 'eval'
})
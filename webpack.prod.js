const path = require('path');
const config = require('./webpack.config');
const merge = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = merge(config, {
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        }
      },
      canPrint: true
    }),
    new FaviconsWebpackPlugin ({
      logo: './src/static/favicon/favicon.png',
      prefix: 'static/favicon/',
      statsFilename: 'iconstats.json',
      persistentCache: false,
      inject: true,
      background: 'transparent',
      title: '',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
  ],
  devtool: 'source-map'
})
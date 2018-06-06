const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const cssnano = require('cssnano');

module.exports = {
  entry: { main: './src/js/app.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
    sourceMapFilename: './bundle.js.map'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    sourceMap: true,
                }
            },
            {
                loader: 'postcss-loader'
            }
        ]
      },
      {
        test: /\.scss$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]'
        }
    }
    ]
  },
  plugins: [ 
    new CleanWebpackPlugin('dist', {} ),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/bundle.css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new CopyWebpackPlugin([
      { from: './src/static/', to: './static/' }
    ]),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    watchContentBase: true,
    port: 3000,
    stats: 'errors-only',
    open: true,
    compress: true
  },
  devtool: 'inline-source-map'
};
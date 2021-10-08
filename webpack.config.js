const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  entry: [
    './src/js/app.js',
  ],
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: '[name].bundle.[contenthash].js', // cache-bust
  },
  resolve: {
    // point bundler to the vue template compiler
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
    // allow imports to omit file exensions, 
    // e.g. "import foo from 'foobar'" instead of "import foo from 'foobar.js'"
    extensions: ['.js', '.vue'],
  },
  module: {
    rules: [
      // use vue-loader plugin for .vue files
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      // rule for loading .scss files
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      }
    ],
  },
  devServer: {
    historyApiFallback: {
      // SPA fallback route
      index: '/dist/index.html',
    },
    proxy: [
      {
        // Proxy api routes to IIS Express
        context: '/api/**',
        target: 'http://localhost:64373',
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.[contenthash].css', // cache-bust
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      //favicon: 'src/images/favicon.ico',
      publicPath: '/dist'
    }),
    new ESLintWebpackPlugin({
      files: ['src'],
      extensions: ['js', 'vue'],
      failOnError: false // just show warnings for dev builds
    }),
  ],
};

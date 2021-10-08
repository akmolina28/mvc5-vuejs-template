const { mergeWithCustomize, unique } = require('webpack-merge');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const baseConfig = require('./webpack.config');

module.exports = mergeWithCustomize({
  customizeArray: unique(
    'plugins',
    ['ESLintWebpackPlugin'],
    (plugin) => plugin.constructor && plugin.constructor.name,
  ),
})(baseConfig, {
  mode: 'production',
  devtool: false,
  plugins: [
    new ESLintWebpackPlugin({
      files: ['src'],
      extensions: ['js', 'vue'],
      failOnError: true // block the build on lint error
    }),
  ],
});

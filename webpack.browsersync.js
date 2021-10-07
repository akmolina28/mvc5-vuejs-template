const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(baseConfig, {
  plugins: [
    new BrowserSyncPlugin({
     host: 'localhost',
     port: '3000',
     // proxy the webpack dev server
     proxy: 'http://localhost:8080',
    },
    {
     reload: false
    }),
  ],
});

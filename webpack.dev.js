const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  // devServer: {
  //   contentBase: path.resolve(__dirname, 'dist'),
  //   // compress: true,
  //   host: '0.0.0.0',
  //   port: 8084,
  //   open: true,
  //   hot: true,
  //   watchContentBase: true,
  //   // disableHostCheck: true,
  //   // historyApiFallback: {
  //   //   disableDotRule: true,
  //   // },
  // },
});

const path = require("path");
const webpack = require('webpack')
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const baseWebpackConfig = require('./webpack.config.base');

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new webpack.DefinePlugin({
      APP_ENV: require('../env/dev.env')
    }),
  ],
});

module.exports = devWebpackConfig;

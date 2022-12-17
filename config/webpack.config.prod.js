const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseWebpackConfig = require('./webpack.config.base');

const prodWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',

    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new webpack.DefinePlugin({
            APP_ENV: require('../env/prod.env'),
        }),
    ],
});

module.exports = prodWebpackConfig;

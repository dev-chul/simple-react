const webpack = require('webpack');
const { merge } = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');

const baseWebpackConfig = require('./webpack.config.base');

const prodWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',

    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new webpack.DefinePlugin({
            APP_ENV: require('../env/prod.env'),
        }),
        new CompressionPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            generateStatsFile: true,
            statsFilename: 'bundle-report.json',
        }),
    ],
});

module.exports = prodWebpackConfig;

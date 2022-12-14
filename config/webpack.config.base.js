const path = require('path');

module.exports = {
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'index.bundl.[fullhash].js',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader', // compiles Sass to CSS, using Node Sass by default
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/i,
                type: 'asset',
                resourceQuery: /url/, // *.svg?url
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        esModule: false,
                        name: '[name].[ext]?[hash]',
                    },
                },
                type: 'javascript/auto',
            },
        ],
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src/'),
        },
    },
};

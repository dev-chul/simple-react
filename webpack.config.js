const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
/**
 * 최초 원형으로 유지(사용하고 있지는 않음. (package.json 참고))
 */
module.exports = {
  mode: "development",
  
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundl.[hash].js",
  },
  
  devServer: {
    port: 3000,
    liveReload: true,
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
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
    ],
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    }
  },
  
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
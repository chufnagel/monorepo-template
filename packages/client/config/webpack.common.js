const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");

const SRC_DIR = path.join(__dirname, "../src");

module.exports = {
  entry: {
    app: `${SRC_DIR}/index.jsx`,
  },
  context: SRC_DIR,
  resolve: {
    extensions: [".js", ".jsx", ".json", "*"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          ExtractCssChunks.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: "./postcss.config.js",
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new ExtractCssChunks({
      filename: "[name].css",
      chunkFilename: "[id].css",
      // hot: true /* only necessary if hot reloading not function*/
    }),
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      favicon: `${SRC_DIR}/favicon.ico`,
    }),
  ],
};

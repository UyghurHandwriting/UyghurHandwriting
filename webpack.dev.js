const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
var webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    //DefinePlugin replaces variables in your code with other values or expressions at compile time.
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    new Dotenv(),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});

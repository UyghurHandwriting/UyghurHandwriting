const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: "./src/Index.tsx", // Path the entry file of the application
  output: {
    path: path.resolve(__dirname, "./dist"), // Path to to were all files will be placed during a build
    filename: "bundle.js", // file name of the bundled js file
    clean: true, // clean/remove all files in dist before each build
    publicPath: "/",
  },
  devtool: "eval-source-map", // creates a source map for dev, this option should not be available in prod
  plugins: [
    new HtmlWebpackPlugin({
      // Dynamically create the html file for you on build
      title: "Pet Parent Lookup Tool", // What gets placed in the title element in the HTML file
      minify: true, // Minify js if webpack mode is production
      hash: true, // append a unique webpack compilation hash to all included scripts and CSS files. - useful for cache busting
      template: "./src/index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: path.join("env.js"), to: "env.js" }],
    }),
  ],
  devServer: {
    port: 3003,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "./dist"), // Content not from webpack will come from this path
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/, // File extensions that will be transformed
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // selected transpiler
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"], // resolve extensions so they are not required in an import path
  },
};

const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "/src/index.js",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "./",
  },
  module: {
    rules: [
      {
      test: /\.jsx?$/,
      loader: "babel-loader",
      options: {
        presets: ["@babel/env", "@babel/react"],
        plugins: [],
        },
      },
      {
        test: /\.css$/,
        loader: "css-loader",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, "src/index.html"),
    }),
  ],
}

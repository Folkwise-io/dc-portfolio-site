const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: "/src/index.tsx",
  target: "web",                                          //after ts
  mode: "development",                                    //after ts
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],  //after ts
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "./",
  },
  module: {
    rules: [
      {                                                    //after ts
        test: /\.(ts|tsx)$/,                               //after ts
        loader: "ts-loader",                               //after ts
      },                                                   //after ts
      {
      test: /\.jsx?$/,                                     //ask monarch/team - redundant?
      loader: "babel-loader",
      options: {
        presets: ["@babel/env", "@babel/react"],
        plugins: [],
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
}

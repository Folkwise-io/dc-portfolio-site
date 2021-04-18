const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: "/src/index.tsx",
  target: "web",                                          //after ts
  mode: "development",                                    //after ts
  devtool: "source-map",
  module: {
    rules: [
      {                                                    //after ts
        test: /\.(ts|tsx)$/,                               //after ts
        loader: "ts-loader", 
        exclude: /node_modules/                            //after ts
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
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],  //after ts
  },
  output: {
    filename: "bundle.js"
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    // proxy: {
    //   '/api': 'https://localhost:5000',
    //   pathRewrite: { '^/api': '' },
    // },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      hash: true,
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin(),
  ],
}

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: '/src/index.tsx',
  target: 'web', //after ts
  mode: 'development', //after ts
  devtool: 'source-map',
  module: {
    rules: [
      {
        //after ts
        test: /\.(ts|tsx)$/, //after ts
        loader: 'ts-loader',
        exclude: /node_modules/, //after ts
      }, //after ts
      {
        test: /\.jsx?$/, //ask monarch/team - redundant?
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'],
          plugins: [],
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'], //after ts
  },
  output: {
    filename: 'bundle.js',
  },

  devServer: {
    hot: true,
    open: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/api': '' },
        secure: false,
      }
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: true,
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};

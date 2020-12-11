// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",

  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack Covid Dashboard",
      template: path.resolve(__dirname, "./src/index.html"), // шаблон
      filename: "index.html", // название выходного файла
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, "src"),
          from: "images/",
          to: "images/",
        },
      ],
    }),
  ],

  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      // Fonts and SVG
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      // CSS
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
      // JSON
      {
        test: /\.json$/,
        use: ["json-loader"],
        type: "javascript/auto",
      },
      // sounds
      {
        test: /\.(mp3|wav)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "sounds/[hash]-[name].[ext]",
          },
        }],
      },
    ],
  },
};

const webpack = require("webpack");
const path = require("path");

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

/*
 * We've enabled ExtractTextPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/extract-text-webpack-plugin
 *
 */

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/index",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "dist",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",

        options: {
          presets: ["env", "react"],
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
          fallback: "style-loader",
        }),
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000,
            name: "./img/[name].[ext]",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [new UglifyJSPlugin(), new ExtractTextPlugin("bundle.css")],
};

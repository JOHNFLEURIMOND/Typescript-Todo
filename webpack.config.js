const path = require("path");
const webpack = require("webpack");
const pkg = require("./package.json");
const rules = [
    {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }
]
module.exports = {
  target: "web",
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {rules},
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devServer:{
      contentBase: './',
      port: 5000
  }
};
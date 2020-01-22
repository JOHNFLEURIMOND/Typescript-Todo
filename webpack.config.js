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
  entry: {
    [pkg.name]: "./src/index.tsx",
  },
  target: "web",
  externals: {
    react: "react",
    "react-dom": "react-dom",
    lodash: "_",
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    library: "Typescript Dev",
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
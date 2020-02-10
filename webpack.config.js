/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const rules = [
  {
    test: /\.tsx?/,
    exclude: [
      /\.html$/,
      /\.(js|jsx)$/,
      /\.node_modules/,
      /\.css$/,
      /\.scss$/,
      /\.json$/,
      /\.bmp$/,
      /\.gif$/,
      /\.jpe?g$/,
      /\.png$/,
    ],
    loader: ['babel-loader', 'file-loader'],
  },
];
module.exports = {
  target: 'web',
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: { rules },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    contentBase: './',
    port: 5000,
  },
};

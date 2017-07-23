const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const buildPath = path.resolve(__dirname, 'build');

const config = {
  devtool: 'source-map',
  target: 'electron-main',
  entry: './src/main.js',
  output: {
    path: buildPath,
    filename: 'main.js',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new CopyWebpackPlugin([
      { from: 'src/index.html', to: 'index.html' },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  node: {
    __dirname: false,
    __filename: false
  },
};

module.exports = config;
const webpack = require('webpack');
const path = require('path');

const buildPath = path.resolve(__dirname, 'build');

const NODE_ENV = process.env.NODE_ENV || 'development';
const devtool = NODE_ENV === 'development' ? 'inline-source-map' : 'source-map';

const config = {
  devtool,
  target: 'electron-renderer',
  entry: './src/renderer.js',
  output: {
    path: buildPath,
    filename: 'renderer.js',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  }
};

module.exports = config;
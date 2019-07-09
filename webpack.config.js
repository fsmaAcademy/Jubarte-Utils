var path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
      rules: [
          {
              test: /\.ts?$/,
              use: 'ts-loader',
              exclude: /node_modules/
          }
      ]
  },
  resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json']
  },
  output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
  },
  devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
  }
};
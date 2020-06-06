const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './app/src/index.js',
  output: {
    path: path.resolve(__dirname, './app/public/js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
   new Dotenv()
 ]
};

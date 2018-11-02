const path = require('path');

module.exports = {
  entry: path.resolve('./client/src'),
  output: {
    path: path.resolve('./client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react']
        }
      },
      {
        test: [/\.css$/, /\.scss$/],
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/, 
        loader: 'url-loader?limit=100000' 
      },
      {
        test: /\.(gif|png|jpe?g|svg|pdf)$/i,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'development'
}
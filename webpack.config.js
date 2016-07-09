const path = require('path')
const webpack = require('webpack')

const srcPath = path.join(__dirname, 'app')
const entryPath = path.join(srcPath, 'index.jsx')
const outputPath = path.join(__dirname, 'public')

console.log(outputPath)

module.exports = {
  entry: entryPath,
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  resolve: {
    root: [srcPath],
    extensions: ['', '.js', '.jsx']
  }
}
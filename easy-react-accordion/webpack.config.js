var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/accordion.js',
  output: {
    path: path.resolve('lib'),
    filename: 'accordion.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
}
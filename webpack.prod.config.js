var path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'style-loader!css?sourceMap!sass?sourceMap'
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015'],
          cacheDirectory: true
        }
      },
      {
                //IMAGE LOADER
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader:'file-loader'
      },
      {
        test: /\.html$/,
        loader: ['ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './build/app')),'html-loader']
      }
    ]
  },
  context: __dirname,
  entry: './build/app/app.js',
  output: {
    path: path.join(__dirname, 'server/public'),
    filename: 'bundle.js'
  }
};
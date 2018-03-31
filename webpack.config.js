var path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
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
  },
    //watch: true,
  devtool: 'source-map',
  devServer:{
    contentBase: 'server/public'
  }
};
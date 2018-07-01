const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
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
  entry: {
    'app':'./build/app/app.js'
  },
  output: {
    path: path.join(__dirname, 'server/public'),
    filename: 'bundle.js'
  },
    //watch: true,
  devtool: 'source-map',
  devServer: {
    contentBase: 'server/public'
  }
};
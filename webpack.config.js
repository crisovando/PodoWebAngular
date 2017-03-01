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
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015'],
                    cacheDirectory: true
                }
            },
            {
                test: /\.html$/,
                loader: ['ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './app')) , 'html-loader']
            },
            {
                //IMAGE LOADER
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader:'file'
            },
        ]
    },
    context: __dirname,
    entry: "./app/app.js",
    output: {
        path: path.join(__dirname, "server/public"),
        filename: "bundle.js"
    },
    devtool: "source-map"
}
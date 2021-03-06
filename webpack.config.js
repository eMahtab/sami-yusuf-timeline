const webpack = require('webpack');
module.exports = {
     entry: './src/main.js',
     output: {
         path: './src',
         filename: 'bundle.js',
     },
     devtool:'eval-source-map',
     devServer:{
          inline:true,
          contentBase:'./src',
          port:3333
     },
     module: {
         loaders: [{  test: /\.js$/,  exclude: /node_modules/, loader: 'babel' },
                   {  test: /\.css$/,  exclude: /node_modules/, loader: 'style!css' },
                   {  test: /\.jpg$/,  exclude: /node_modules/, loader: 'url' },
                   {  test: /\.svg$/,  exclude: /node_modules/, loader: 'url' }]
     }
 }

const webpack = require('webpack');
module.exports = {
     entry: './src/main.js',
     output: {
         path: './dist/sami-yusuf-timeline',
         filename: 'bundle.js',
     },
     devtool:'source-map',
     module: {
         loaders: [{  test: /\.js$/,  exclude: /node_modules/, loader: 'babel' },
                   {  test: /\.css$/,  exclude: /node_modules/, loader: 'style!css' },
                   {  test: /\.jpg$/,  exclude: /node_modules/, loader: 'url' },
                   {  test: /\.svg$/,  exclude: /node_modules/, loader: 'url' }]
     },
     plugins: [
     new webpack.DefinePlugin({  'process.env': {'NODE_ENV': JSON.stringify('production')}   }),
     new webpack.optimize.DedupePlugin(),
     new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }), //minify everything
     new webpack.optimize.AggressiveMergingPlugin()//Merge chunks
   ]
 }

var path = require('path');

const OUTPUT_PATH = path.join(__dirname, '/client/build');

module.exports = {
  entry: './client/index.jsx',
  
  output: {
    path: __dirname + '/client/build',
    filename: 'bundle.js',
  },

  module: {
    loaders: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    },
    {
      test: /\.css$/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
    }
    ]
  }
};
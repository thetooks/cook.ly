module.exports = {
  entry: './client/index.jsx',
  
  output: {
    path: './build',
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.jsx?/,
      loader: 'babel'
    }]
  }
};
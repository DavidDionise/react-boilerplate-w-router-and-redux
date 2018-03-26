const path = require('path');
const webpack = require('webpack');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: [ './src/index.js' ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [ 'babel-loader' ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader?modules', ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [ path.join(__dirname, 'src', 'stylesheets') ]
            }
          }
        ]
      }
    ],
  },

  plugins: [
    new UglifyPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('production'),
      API_URL: JSON.stringify('http://localhost:3000')
    })
  ]
};

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('development'),
      API_URL: JSON.stringify('http://localhost:3000')
    })
  ]
};

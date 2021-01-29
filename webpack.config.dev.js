const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const rules = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    enforce: 'pre',
    use: [{
      loader: 'babel-loader',
      options: {
        plugins: [require.resolve('react-refresh/babel')]
      }
    }, {
      loader: 'standard-loader',
      options: {
        snazzy: true,
        error: true
      }
    }]
  },
  {
    test: /\.styl$/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            exportLocalsConvention: 'camelCase',
            localIdentName: '[name]__[local]__[hash:base64:6]'
          },
          import: true,
          importLoaders: true
        }
      },
      'resolve-url-loader',
      'stylus-loader'
    ]
  },
  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader',
      'resolve-url-loader'
    ]
  },
  {
    test: /\.(jpe?g|png|gif|svg|ttf|ico)$/i,
    use: 'file-loader'
  }
]

module.exports = {
  entry: [
    './index.js'
  ],
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 8082,
    hot: true
  },
  module: {
    rules
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({ template: 'index.html' })
  ]
}

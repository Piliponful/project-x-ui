const path = require('path')

const distDir = path.resolve(__dirname, 'dist')

const rules = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    enforce: 'pre',
    use: ['babel-loader', {
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
    test: /\.(jpe?g|png|gif|svg|ttf)$/i,
    use: 'file-loader'
  },
  {
    test: /\.svg$/,
    use: [{ loader: '@svgr/webpack', options: { svgoConfig: { plugins: [{ cleanupIDs: false }] } } }]
  }
]

module.exports = {
  entry: './index.js',
  output: {
    path: distDir,
    filename: 'bundle.js',
    library: 'project-x-ui',
    libraryTarget: 'umd'
  },
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
}

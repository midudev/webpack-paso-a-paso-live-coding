const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const javascriptRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-react',
        '@babel/preset-env'
      ],
      plugins: ['@babel/plugin-proposal-optional-chaining']
    }
  }
}

const typescriptRules = {
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: 'ts-loader',
}

const productionPlugins = [
  new CompressionPlugin()
]

module.exports = (env, {mode}) => ({
  output: {
    filename: 'app.[contentHash].js'
  },
  module: {
    rules: [
      typescriptRules,
      javascriptRules
    ]
  },
  plugins: [
    mode === 'production' && [...productionPlugins],
    new HtmlWebpackPlugin({
      title: 'Webpack Paso a Paso',
      template: 'src/index.html'
    })
  ].filter(Boolean)
})
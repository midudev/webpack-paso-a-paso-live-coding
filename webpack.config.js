const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const javascriptRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-react', '@babel/preset-env'],
      plugins: ['@babel/plugin-proposal-optional-chaining']
    }
  }
}

const developmentPlugins = []
const productionPlugins = [new CompressionPlugin()]

module.exports = (env, { mode }) => ({
  devServer: {
    //contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  output: {
    filename: 'app.[contentHash].js'
  },
  module: {
    rules: [javascriptRules]
  },
  plugins: [
    ...(mode === 'production' ? productionPlugins : developmentPlugins),
    new HtmlWebpackPlugin({
      title: 'Webpack Paso a Paso',
      template: 'src/index.html'
    })
  ].filter(Boolean)
})

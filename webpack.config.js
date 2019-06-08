const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      GIPHY_API_TOKEN: JSON.stringify(process.env.GIPHY_API_TOKEN),
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    })
  ]
};

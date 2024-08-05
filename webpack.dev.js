const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './tests/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'tests', 'index.html'), // Path to your HTML file
      filename: 'index.html',
      inject: true,
    }),
  ],
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve files from the 'dist' directory
    },
    compress: true,
    port: 9001,
  },
  watch: true,
  watchOptions: {
    poll: 1000,
    ignored: [
      '**/node_modules',
      '**/dist/**',
    ],
  },
};

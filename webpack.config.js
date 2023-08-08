const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: {
    'src/extension/scripts/content': path.join(
      __dirname,
      'src',
      'content',
      'index.ts'
    ),
    'src/extension/scripts/background': path.join(
      __dirname,
      'src',
      'background',
      'index.ts'
    ),
    'src/local/dist/index': path.join(__dirname, 'src', 'local', 'index.tsx'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname),
  },
  mode: 'development',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['to-string-loader', 'css-loader', 'sass-loader'],
      },

      {
        test: /\.css$/i,
        use: ['to-string-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
  plugins: [new HtmlWebpackPlugin()],
};

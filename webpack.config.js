const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: {
    content: path.join(__dirname, 'src', 'content', 'index.ts'),
    background: path.join(__dirname, 'src', 'background', 'index.ts'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'src', 'extension', 'scripts'),
    clean: true,
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
};

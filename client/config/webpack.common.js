var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    polyfills: './client/src/polyfills.ts',
    app: './client/src/main.ts',
  },

  resolve: {
    extensions: ['.ts', '.js', '.css']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: {configFileName: helpers.root('tsconfig.json')}
          },
          'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        include: [helpers.root('src', 'resources')],
        loader: 'file-loader?name=resources/[name].[hash].[ext]'
      },
      {
        test: /\.scss$/,
        include: [helpers.root('src', 'app'), helpers.root('src', 'login')],
        loaders: ["raw-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        exclude: [helpers.root('src', 'app'), helpers.root('src', 'login')],
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.css$/,
        include: [helpers.root('src', 'app'), helpers.root('src', 'login'), helpers.root('src', 'resources')],
        use: 'raw-loader'
      },
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'client/index.html',
      chunks: ['app', 'vendor', 'polyfills']
    }),
  ]
};


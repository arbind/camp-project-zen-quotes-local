var path    = require('path');
var webpack = require('webpack')

var jQueryPlugin = new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery", "window.jQuery": "jquery" })
var BootstrapPlugin = new webpack.ProvidePlugin({ _bootstrap: "bootstrap"})

module.exports = {
  context: __dirname,
  entry: {
    main: "./src/main.js",
    spec: "mocha!./spec/index.js",
  },
  output: {
    path: path.join(__dirname, "assets"),
    publicPath: "assets/", // relative path for github pages
    filename: "[name].js"
  },
  resolve: {
    extensions: [
      "", 
      ".html",
      ".jade",
      ".css",
      ".scss",
      ".less",
      ".js",
      ".coffee",
      ".json"
    ],
    root: [
      __dirname,
      path.join(__dirname, 'web'),
      path.join(__dirname, 'src'),
      path.join(__dirname, 'style'),
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'lib'),
    ]
  },
  module: {
    loaders: [
      // { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      { test: /\.json$/,   loader: "json" },
      { test: /\.coffee$/, loader: "coffee" },
      { test: /\.css$/,    loader: "style!css" },
      { test: /\.less$/,   loader: "style!css!less" },
      { test: /\.html$/,   loader: "html" },
      { test: /\.jade$/,   loader: "jade?self" },
      { test: /\.(png|jpg|gif)$/,    loader: "url?limit=10000" },

      // Needed for the css-loader for bootstrap-webpack
      { test: /\.(woff|woff2)$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot$/,    loader: "file" },
      { test: /\.svg$/,    loader: "url?limit=10000&mimetype=image/svg+xml" },
      // { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url?limit=100000' }
    ]
  },
  plugins: [ jQueryPlugin ],
  devtool: 'source-map'
};

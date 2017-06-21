const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    "script-loader!jquery/dist/jquery.min.js",
    "script-loader!foundation-sites/dist/foundation.min.js",
    "./app/app.jsx"
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: path.resolve(__dirname),
    filename: "./public/bundle.js"
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    alias: {
      "Main": path.resolve(__dirname, 'app/components/Main.jsx'),
      "Nav": path.resolve(__dirname, 'app/components/Nav.jsx'),
      "Weather": path.resolve(__dirname, 'app/components/Weather.jsx'),
      "About": path.resolve(__dirname, 'app/components/About.jsx'),
      "Examples": path.resolve(__dirname, 'app/components/Examples.jsx'),
      "WeatherForm": path.resolve(__dirname, 'app/components/WeatherForm.jsx'),
      "WeatherMessage": path.resolve(__dirname, 'app/components/WeatherMessage.jsx'),
      "openWeatherMap": path.resolve(__dirname, 'app/api/openWeatherMap.jsx')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        options: {
            presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};

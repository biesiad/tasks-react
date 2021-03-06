var path = require("path");

module.exports = {
  entry: {
    app: [
      './public/index.js'
    ],
  },

  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].js',
  },

  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".d.ts", ".tsx", ".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.js|\.jsx|\.ts|\.d\.ts|\.tsx$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.css|\.scss$/,
        use: [
          { loader: "style-loader" }, // creates style nodes from JS strings
          { loader: "css-loader" }, // translates CSS into CommonJS
          { loader: "sass-loader" }, // compiles Sass to CSS
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },
};

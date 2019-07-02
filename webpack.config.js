const HtmlWebpackPlugin = require("html-webpack-plugin");

const baseConfig = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
};

const standAloneConfig = {
  ...baseConfig,
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ]
};

const singleSpaConfig = {
  ...baseConfig,
  entry: "./src/indexSingleSpa.js",
  output: {
    filename: "catSingleSpaBundle.js",
    libraryTarget: "system"
  }
};

module.exports = [standAloneConfig, singleSpaConfig];

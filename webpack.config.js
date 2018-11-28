var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "bundle"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loaders: ["babel-loader"] 
      }
    ]
  },
  mode: "production"
};

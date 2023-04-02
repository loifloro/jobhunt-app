const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/js/index.js"),
  output: {
    assetModuleFilename: "images/[name].[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
};

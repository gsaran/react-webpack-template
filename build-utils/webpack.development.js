var path = require("path");

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    liveReload: true
  },
});

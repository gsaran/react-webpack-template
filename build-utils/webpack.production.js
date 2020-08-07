const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => ({
  devtool: "source-map",
  output: {
    filename: "[name].[chunkhash].js",
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
});

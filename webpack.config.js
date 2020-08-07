const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const loadPresets = require("./build-utils/loadPresets");
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return merge(
    {
      mode,
      entry: "./src/App.js",
      module: {
        rules: [
          {
            test: /\.(png|jpg|gif|jpeg)$/i,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 5000,
                },
              },
            ],
          },
        ],
      },
      output: {
        filename: "bundle.js",
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode),
    loadPresets({ mode, presets })
  );
};

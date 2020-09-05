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
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
              },
            },
          },
        ],
      },
      output: {
        filename: "bundle.js",
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "./index.html",
        }),
        new webpack.ProgressPlugin(),
      ],
    },
    modeConfig(mode),
    loadPresets({ mode, presets })
  );
};

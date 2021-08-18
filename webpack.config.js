const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");

const files = glob.sync("src/*.html");
module.exports = {
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  entry: "./src/script.js",
  plugins: [
    ...files.map(
      (filePath) =>
        new HtmlWebpackPlugin({
          filename: `${filePath.replace(/src\//, "")}`,
          template: `${filePath}`,
        })
    ),
  ],
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "ie 11" }]],
          },
        },
      },
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

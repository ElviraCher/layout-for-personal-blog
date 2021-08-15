const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  entry: "./src/script.js",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "blog-list.html",
      template: "src/blog-list.html",
    }),
    new HtmlWebpackPlugin({
      filename: "story-page.html",
      template: "src/story-page.html",
    }),
    new HtmlWebpackPlugin({
      filename: "feedback.html",
      template: "src/feedback.html",
    }),
  ],
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "ie 11" }]],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

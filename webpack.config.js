const path = require("path");

module.exports = {
  entry: "./src/script.js",
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "dist"),
  },
};
// todo: установить плагины для корректной сборки html и css

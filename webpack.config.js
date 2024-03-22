const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const javascript = {
  test: /\.(js)$/,
  exclude: /(node_modules)/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
    },
  },
};

const postcss = {
  loader: "postcss-loader",
  options: {
    postcssOptions: {
      plugins: [
        require('autoprefixer')(),
      ],
    },
  },
};



const styles = {
  test: /\.(css)$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        sourceMap: true,
        url: false,
      },
    },
    postcss,
  ], 
};

const images = {
  test: /\.(png|jpe?g|gif|svg)$/i,
  loader: "file-loader",
  options: {
    name: "images/photos/[name].[ext]",
  },
};

const icons = {
  test: /\.svg$/,
  loader: "file-loader",
  options: {
    name: "images/icons/[name].[ext]", // Így fogja a fájlokat a dist/images/icons mappába helyezni
  },
};

const pug = {
  test: /\.pug$/,
  use: ["pug-loader"],
};

const config = {
  mode: "development",
  devtool: "source-map",
  entry: {
    App: "./public/javascripts/bagoly-app.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [javascript, styles, images, icons, pug],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "css/style.css" }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public/images/photos", // forrás mappa
          to: "images/photos", // cél mappa a dist mappában
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public/images/icons",
          to: "images/icons",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/views/index.pug",
      filename: "index.html", 
    }),
    new HtmlWebpackPlugin({
      template: "./public/views/drinks.pug",
      filename: "itallap.html", 
    }),
    new HtmlWebpackPlugin({
      template: "./public/views/contactPage.pug",
      filename: "kapcsolat.html", 
    }),
  ],
};

module.exports = config;
// Path: public/views/index.pug
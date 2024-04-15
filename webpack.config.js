const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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


const pug = {
  test: /\.pug$/,
  use: [
    {
      loader: "pug-loader",
      options: {
        pretty: true,
      },
    },
  ],
};

const config = {
  mode: "development",
  devtool: "source-map",
  entry: {
    App: "./public/javascripts/bagoly-app.js",
  },
  output: {
    path: path.resolve(__dirname, "public", "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [javascript, styles, pug],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "style.css" }),
    
    
    new HtmlWebpackPlugin({
      template: "./views/index.pug",
      filename: "../index.html", 
    }),
    new HtmlWebpackPlugin({
      template: "./views/drinks.pug",
      filename: "../kinalat.html", 
    }),
    new HtmlWebpackPlugin({
      template: "./views/contactPage.pug",
      filename: "../kapcsolat.html", 
    }),
    new HtmlWebpackPlugin({
      template: "./views/privacyPolicy.pug",
      filename: "../adatvedelem.html", 
    }),
    new HtmlWebpackPlugin({
      template: "./views/impressium.pug",
      filename: "../impresszium.html", 
    }),
  ],
};

module.exports = config;
// Path: views/index.pug
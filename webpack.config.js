const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/app.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "js/app.js",
  },
  resolve: {
    alias: {
      //alias字段处理别名
      page: path.resolve(__dirname, "src/page"),
      component: path.resolve(__dirname, "src/component"),
    },
  },
  module: {
    rules: [
      //react文件处理
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"], //babel-preset-env转码插件
          },
        },
      },
      //css文件处理
      {
        test: /\.css$/i,
        use: ExtractTextPlugin.extract({
          //extract-text-webpack-plugin抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象
          fallback: "style-loader",
          use: "css-loader",
        }),
      },
      //sass文件处理
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          //extract-text-webpack-plugin抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
        }),
      },
      //图片的配置
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: "url-loader",
          options: {
            //1.文件大小小于limit参数，url-loader将会把文件转为DataURL；2.文件大小大于limit，url-loader会调用file-loader进行处理，参数也会直接传给file-loader。
            limit: 8192,
            name: "resource/[name].[ext]",
          },
        }, ],
      },
      //字体的配置
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "resource/[name].[ext]",
          },
        }, ],
      },
    ],
  },
  plugins: [
    //处理html文件
    new HtmlWebpackPlugin({
      template: "./src/index.html", //模板
    }),

    //独立css文件
    new ExtractTextPlugin("css/[name].css"),

    //提出公共模块

    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      filename: "js/base.js",
    }),
  ],
  devServer: {
    port: 8086,
    historyApiFallback: {
      index: "/dist/index.html", //404页面也会回到index.html  404s will fallback to /dist/index.html
    },
  },
};
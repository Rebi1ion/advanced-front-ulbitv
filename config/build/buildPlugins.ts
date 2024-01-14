import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { type BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins ({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const pluginsList = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),

    // извлекает CSS в отдельные файлы
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];

  if (isDev) {
    pluginsList.push(new webpack.HotModuleReplacementPlugin());
    pluginsList.push(new ReactRefreshWebpackPlugin());
  }

  return pluginsList;
}

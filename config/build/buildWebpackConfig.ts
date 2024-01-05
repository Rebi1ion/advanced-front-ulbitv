import path from "path";
import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildRules } from "./buildRules";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";
import webpackDevServer from "webpack-dev-server";

interface Configuration extends webpackDevServer {
  devServer: webpackDevServer.Configuration;
}

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "[name][fullhash].js",
      clean: true,
    },

    module: {
      rules: buildRules(),
    },

    devtool: isDev ? "inline-source-map" : undefined,

    devServer: isDev ? buildDevServer(options) : undefined,

    resolve: buildResolvers(),

    plugins: buildPlugins(options),
  };
}

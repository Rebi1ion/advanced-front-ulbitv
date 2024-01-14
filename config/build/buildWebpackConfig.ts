import { type BuildOptions } from "./types/config";
import type webpack from "webpack";
import { buildRules } from "./buildRules";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";
import type webpackDevServer from "webpack-dev-server";

export interface Configuration extends webpackDevServer {
  devServer: webpackDevServer.Configuration;
}

export function buildWebpackConfig (
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "[name][fullhash].js",
      clean: true,
    },

    module: {
      rules: buildRules(options),
    },

    devtool: isDev ? "inline-source-map" : undefined,

    devServer: isDev ? buildDevServer(options) : undefined,

    resolve: buildResolvers(options),

    plugins: buildPlugins(options),
  };
}

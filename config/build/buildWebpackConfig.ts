import path from "path";
import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildRules } from "./buildRules";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode } = options;
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

    resolve: buildResolvers(),

    plugins: buildPlugins(options),
  };
}

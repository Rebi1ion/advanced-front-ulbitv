import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers({
  paths,
}: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: [".ts", ".tsx", ".js"],
    preferAbsolute: true,
    modules: [paths.src, "node_modules"],
    alias: {},
    mainFiles: ["index"],
  };
}

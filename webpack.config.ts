import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const config = (env: BuildEnv): webpack.Configuration => {
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const port = env.port || 3000;

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });
};

export default config;

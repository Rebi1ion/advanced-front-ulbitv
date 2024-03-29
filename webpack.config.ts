import type webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { type BuildEnv, type BuildPaths } from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
  src: path.resolve(__dirname, "src"),
};

const config = (env: BuildEnv): webpack.Configuration => {
  const mode = env.mode ?? "development";
  const isDev = mode === "development";
  const port = env.port ?? 3000;
  const apiUrl = env.apiUrl ?? "http://localhost:8000";
  const project = "frontend";

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    apiUrl,
    project,
  });
};

export default config;

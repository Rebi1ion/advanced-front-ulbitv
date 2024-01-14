import { type BuildOptions } from "./types/config";

interface buildDevServerTypes {
  port: number;
  open: boolean;
  historyApiFallback: boolean;
  hot: boolean;
}

export function buildDevServer({ port }: BuildOptions): buildDevServerTypes {
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}

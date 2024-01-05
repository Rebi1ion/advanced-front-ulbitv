import { BuildOptions } from "./types/config";

export function buildDevServer({ port }: BuildOptions) {
  return {
    port,
    open: true,
  };
}

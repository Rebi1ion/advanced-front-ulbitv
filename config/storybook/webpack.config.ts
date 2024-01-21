import path from "path";
import { type BuildPaths } from "../build/types/config";
import type webpack from "webpack";

export default function config({ config }: { config: webpack.Configuration }) {
  const paths: BuildPaths = {
    entry: "",
    html: "",
    output: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", "tsx");

  //   config.module?.rules?.push({
  //     test: /\.scss$/,
  //     use: ["style-loader", "css-loader?modules&importLoaders", "sass-loader"],
  //     include: path.resolve(__dirname),
  //   });

  if (config.module)
    config.module.rules = config.module.rules && [
      ...config.module.rules.map((rule: any) => {
        if (/svg/.test(rule.test)) {
          // Silence the Storybook loaders for SVG files
          return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
      }),
      // Add your custom SVG loader
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ];

  return config;
}

// распознает импорт классов scss файлов в ts|x файлах
declare module "*.scss" {
  type IClassNames = Record<string, string>
  const classNames: IClassNames;
  export = classNames
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare const __IS_DEV__: boolean;
declare const __API__: string;

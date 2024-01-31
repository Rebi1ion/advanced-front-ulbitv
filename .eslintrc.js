module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    //  "plugin:storybook/recommended"
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs,tsx}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: ["*.test.tsx", "*.test.ts"],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    ".eslintrc.js",
    "generate-visual-json-report.js",
    "json-server/*",
  ],

  plugins: ["react", "i18next", "react-hooks"],
  rules: {
    "@typescript-eslint/no-floating-promises": "warn",
    quotes: [2, "double"],
    "@typescript-eslint/quotes": [2, "double"],
    semi: [2, "always"],
    "@typescript-eslint/semi": "off",
    "comma-dangle": [
      2,
      {
        functions: "never",
        arrays: "always-multiline",
        imports: "never",
        exports: "never",
        objects: "always-multiline",
      },
    ],
    "@typescript-eslint/comma-dangle": [
      2,
      {
        functions: "never",
        arrays: "always-multiline",
        imports: "never",
        exports: "never",
        objects: "always-multiline",
        enums: "always-multiline",
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "@typescript-eslint/member-delimiter-style": [
      2,
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
        multilineDetection: "brackets",
      },
    ],
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/naming-convention": "off",
    "react/no-deprecated": "off",
    "react/prop-types": "off",
    "i18next/no-literal-string": [
      2,
      { markupOnly: true, ignoreAttribute: ["data-testid", "name"] },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  globals: {
    __IS_DEV__: true,
  },
};

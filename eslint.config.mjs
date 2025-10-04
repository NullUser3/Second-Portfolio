// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 👇 Call compat.extends once per config or with a single array
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("next/typescript"),
  ...compat.extends("prettier"),

  {
    rules: {
      semi: ["error", "always"], // must specify "always" or "never"
    },
  },
];

export default eslintConfig;

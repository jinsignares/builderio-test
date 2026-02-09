import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Fix for conflicting plugins (jsx-a11y is already loaded by nextVitals)
const fixPlugins = (configArray) => {
  return configArray.map((config) => {
    if (config.plugins && config.plugins["jsx-a11y"]) {
      const newPlugins = { ...config.plugins };
      delete newPlugins["jsx-a11y"];
      // Also check for 'import' plugin if it conflicts, but usually it's jsx-a11y that causes issues
      // If 'react' conflicts, do the same
      if (newPlugins["react"]) delete newPlugins["react"]; 
      return { ...config, plugins: newPlugins };
    }
    return config;
  });
};

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...fixPlugins(compat.extends("airbnb", "airbnb-typescript", "prettier")),
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "eslint.config.mjs",
    "postcss.config.mjs",
    "next.config.ts",
  ]),
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "react/require-default-props": "off",
      "import/extensions": "off",
      "import/prefer-default-export": "off",
      "@typescript-eslint/lines-between-class-members": "off",
      "@typescript-eslint/no-throw-literal": "off", // Also deprecated/renamed to only-throw-error
      "@typescript-eslint/return-await": "off", // Might be renamed
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["Link"],
          specialLink: ["hrefLeft", "hrefRight"],
          aspects: ["invalidHref", "preferButton"],
        },
      ],
    },
  },
]);

export default eslintConfig;

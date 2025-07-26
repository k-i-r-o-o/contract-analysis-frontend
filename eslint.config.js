import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "simple-import-sort": simpleImportSort
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // 1. React and external libraries (Node modules)
            ["^react", "^@?\\w"],
            // 2. Internal modules (absolute paths like 'common/')
            ["^common/", "^src/", "^app/"],
            // 3. Relative imports (same directory or subdirectories)
            [
              "^\\.\\.(?!/?$)",
              "^\\.\\./?$",
              "^\\./(?=.*/)(?!/?$)",
              "^\\.(?!/?$)",
              "^\\./?$"
            ],
            // 4. Side effect imports (CSS, SCSS, etc.) - LAST
            ["^.+\\.(s?css|less|sass)$", "^\\u0000"]
          ]
        }
      ],
      "simple-import-sort/exports": "error",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ]
    }
  }
);

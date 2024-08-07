module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "airbnb", "airbnb/hooks",
        "airbnb-typescript",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module",
        tsconfigRootDir: __dirname,
        parser: '@typescript-eslint/parser'
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    rules: {
        "react/function-component-definition": "off",
        "max-len": "off",
        "no-param-reassign": "off",
        "import/no-cycle": "off",
        "import/no-named-as-default": "off"
        // "react/react-in-jsx-scope": "off",
        // "camelcase": "error",
        // "spaced-comment": "error",
        // "quotes": ["error", "single"],
        // "no-duplicate-imports": "error"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "ignorePatterns": ["tsconfig.json", "**/vendor/*.js"],
}

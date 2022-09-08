// eslint-disable-next-line no-undef
module.exports = {
    env: {
        commonjs: true,
        node: true,
    },
    extends: "eslint:recommended",
    overrides: [],
    plugins: ["prettier"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "prettier/prettier": "error",
    },
};

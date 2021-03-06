module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: "babel-eslint",
  extends: ["airbnb", "plugin:react/recommended", "plugin:flowtype:recommended"],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react", "flowtype"],
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};

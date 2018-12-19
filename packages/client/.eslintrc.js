const baseConfig = require("tools/.eslintrc");

module.exports = {
  ...baseConfig,
  extends: [
    ...baseConfig.extends,
    "plugin:react/recommended",
    "prettier/react",
  ],
  "parserOptions": {
    ...baseConfig.parserOptions,
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  rules: {
    ...baseConfig.rules,
    "react/forbid-prop-types": 1,
    "react/jsx-filename-extension": 0,
    "react/react-in-jsx-scope": "warn",
    "react/destructuring-assignment": "warn",
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "hrefLeft", "hrefRight" ],
      "aspects": [ "invalidHref", "preferButton" ]
    }],
    "react/prop-types": "warn",
  }
};

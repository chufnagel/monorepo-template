module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "prettier",
  ],
  "plugins": [
    "react",
    "prettier"
  ],
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module",
  },
  "env": {
    "es6": true,
    "node": true
  },
  "rules": {
    "import/no-extraneous-dependencies": "warn",
    "no-undef": "warn",
    "no-unused-vars": "warn",
    "prettier/prettier": "error",
  }
}

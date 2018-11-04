module.exports = {
  "env": {
    "production": {
      "presets": [
        ["@babel/preset-react"],
        [
          "@babel/preset-env"
        ]
      ],
      "plugins": [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-react-constant-elements",
        "@babel/plugin-transform-react-inline-elements",
        "@babel/plugin-transform-runtime",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-syntax-import-meta",
        "@babel/plugin-proposal-export-namespace-from",
        "@babel/plugin-proposal-function-sent",
        "@babel/plugin-proposal-json-strings",
        "@babel/plugin-proposal-numeric-separator",
        "@babel/plugin-proposal-throw-expressions",
        ["@babel/plugin-proposal-decorators", { "decoratorsBeforeExport": false }]
      ]
    },
    "development": {
      "presets": [
        ["@babel/preset-react"],
        ["@babel/preset-env"]
      ],
      "plugins": [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-react-constant-elements",
        "@babel/plugin-transform-runtime",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-syntax-import-meta",
        "@babel/plugin-proposal-export-namespace-from",
        "@babel/plugin-proposal-function-sent",
        "@babel/plugin-proposal-json-strings",
        "@babel/plugin-proposal-numeric-separator",
        "@babel/plugin-proposal-throw-expressions",
        ["@babel/plugin-proposal-decorators", { "decoratorsBeforeExport": false }]
      ]
    }
  }
}

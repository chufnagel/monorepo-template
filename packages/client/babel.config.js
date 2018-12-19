const baseConfig = require('tools/babel.config.js');

module.exports = {
  "env": {
    "production": {
      "presets": [
        ...baseConfig.env.production.presets,
        ["@babel/preset-react"],
      ],
      "plugins": [
        ...baseConfig.env.production.plugins,
        "@babel/plugin-transform-react-constant-elements",
        "@babel/plugin-transform-react-inline-elements",
      ]
    },
    "development": {
      "presets": [
        ...baseConfig.env.development.presets,
        ["@babel/preset-react"],
      ],
      "plugins": [
        ...baseConfig.env.development.plugins,
        "@babel/plugin-transform-react-constant-elements",
      ]
    }
  }
}

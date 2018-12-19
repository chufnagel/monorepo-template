const baseConfig = require("tools/jest.config.js");

module.exports = {
  ...baseConfig,
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFiles: ["<rootDir>/testSetup.js"],
}

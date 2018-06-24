module.exports = {
  "transform": {
    "\.js|\.ts$": "ts-jest"
  },
  testMatch: [
    "**/tests/**/*\.test\.(js|ts)?(x)",
  ],
  setupTestFrameworkScriptFile: './tests/setup.js',
  "moduleFileExtensions": [
    "ts",
    "js"
  ],
}

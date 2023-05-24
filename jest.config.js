const path = require('path');


/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx"
  ],
  moduleDirectories: [
    "node_modules",
    "bower_components",
    "shared"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":path.resolve(__dirname, './__mocks__/fileMock.js'),
    "\\.(css|less)$": path.resolve(__dirname, './__mocks__/styleMock.js')
  },
};
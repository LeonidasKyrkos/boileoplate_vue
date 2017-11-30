const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  mapCoverage: false,
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
	'src/js/components/**/*.{js,vue}',
	'src/js/helpers/**/*.{js,vue}',
	'src/js/layouts/**/*.{js,vue}',
  ]
}

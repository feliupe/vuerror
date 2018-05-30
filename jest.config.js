const path = require('path')

module.exports = {
    // rootDir: path.join(__dirname, '..', '..'),
    roots: ['<rootDir>/test'],
    moduleFileExtensions: [
        'js',
        'json',
        // tell Jest to handle `*.vue` files
        'vue'
    ],
    transform: {
        // process `*.vue` files with `vue-jest`
        '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
    },
    // support the same @ -> src alias mapping in source code
    moduleNameMapper: {
        // '^vue$': '<rootDir>/node_modules/vue/dist/vue.js',
        '^vue$': 'vue/dist/vue.js'
    },
    snapshotSerializers: [
        '<rootDir>/node_modules/jest-serializer-vue'
    ],
    setupFiles: ["<rootDir>/test/setup.js"]
}

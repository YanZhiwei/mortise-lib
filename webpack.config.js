
const { resolve } = require('path')
module.exports = {
    entry: './src/index.js',
    // 输出
    output: {
        filename: 'main.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
        ]
    },
    plugins: [
    ],
    mode: 'development'
}
const path = require('path')
const HTMLWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: 'development',
    devtool: "source-map"
}
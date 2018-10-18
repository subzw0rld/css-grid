const PATH = require('path');
const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin');
const MINI_CSS_EXTRACT_PLUGIN = require("mini-css-extract-plugin");

const CONFIG = {
    entry: {
        app: './src/js/main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MINI_CSS_EXTRACT_PLUGIN.loader,
                        options: { publicPath: '../' },
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new MINI_CSS_EXTRACT_PLUGIN(),
        new HTML_WEBPACK_PLUGIN({ template: './src/index.html' })
    ],
    output: {
        filename: '[name].bundle.js',
        path: PATH.resolve(__dirname, 'dist')
    }
}

module.exports = CONFIG;
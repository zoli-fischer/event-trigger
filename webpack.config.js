const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

console.log('WEBPACK_ENV: ', process.env.WEBPACK_ENV);

const libraryName = 'index';
const entry = {};
entry[libraryName] = path.resolve(__dirname, 'src/EventTrigger.js');

const config = {
    entry,
    devtool: 'source-map',
    mode: process.env.WEBPACK_ENV,
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].js',
        library: libraryName,
        libraryTarget: 'commonjs',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['lib']),
    ],
};

module.exports = config;

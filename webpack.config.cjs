// Webpack config - HtmlWebpackPlugin, CleanWebpackPlugin, style-loader, css-loader, handlebars-loader
// Converted file into commonjs file due to: "type": "module", in package.json

const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'main.bundle.js',
        path: __dirname + '/dist'
    },

    module: {
        rules: [
            {
                test: [/\.css$/, ], 
                use: 
                    [ 
                        'style-loader', 
                        'css-loader',
                    ],
            },
            {
                test: /\.handlebars$/, 
                loader: "handlebars-loader" 
            },
        ],

    },

    plugins: [
        new HtmlWebpackPlugin
            (
                { 
                    template: './src/index.html' 
                },
            ),
        new CleanWebpackPlugin()    
    ],


};
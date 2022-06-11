const path = require("path");
var HtmlWebpackPulign = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = 
{
    mode: "development",
    entry: "./src/index.js",
    output: 
    {
        filename: "main.[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "source-map",

    plugins: [new HtmlWebpackPulign(
        {
            template: './src/template.html',
            inject: 'body'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname,"resources"),
                    to: path.resolve(__dirname, "dist", "resources")
                }
            ]
        })],

    module: 
    {
        rules: 
        [
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            }

        ]
    }

}

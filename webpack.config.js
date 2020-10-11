const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const path = require("path");

module.exports = {
    entry: "./src/script.js",
    output: {
        filename: "script.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        contentBase: "./dist",
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new CopyPlugin({
            patterns: [
                {
                    from: "*.{html,css,png,webm,mp4,txt,svg,otf}",
                    context: "src",
                },
            ],
        }),
    ],
};

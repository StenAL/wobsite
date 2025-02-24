import CopyPlugin from "copy-webpack-plugin";

import { resolve } from "path";

export default {
    entry: "./src/script.js",
    output: {
        filename: "script.js",
        path: resolve(import.meta.dirname, "dist"),
        publicPath: ""  // needed for css-loader
    },
    devtool: "inline-source-map",
    devServer: {
        watchFiles: ["src/**/*"]
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ // loaders are executed in reverse order
                    "style-loader",  // 2. This injects any CSS files that are loaded in JS code into the DOM
                    "css-loader"     // 1. This resolves imports inside CSS files (e.g. importing a font with url())
                ]
            }
        ]
    },
    plugins: [
        new CopyPlugin({ // copy over non-JS resources to build output
            patterns: [
                {
                    from: "*.{html,png,txt,css,otf}",
                    context: "src"
                }
            ]
        })
    ]
};

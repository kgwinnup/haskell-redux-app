module.exports = {
    entry: './index.js',
    output: {
        filename: '../static/bundle.js'
    },
    devtool: "cheap-eval-source-map",
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ["es2015", "react", "stage-2"] }
            },
            { test: /\.scss$/,      loaders: ["style-loader", "css-loader", "sass-loader"] },
            { test: /\.woff$/,      loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.woff2$/,     loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.ttf$/,       loader: "file-loader" },
            { test: /\.eot$/,       loader: "file-loader" },
            { test: /\.svg$/,       loader: "file-loader" },
            { test: /\.jpg$/,       loader: "file-loader" },
            { test: /\.png$/,       loader: "file-loader" },
            { test: /\.html/,       loader: "file-loader?name=../static/[name].[ext]" },
        ]
    }
}

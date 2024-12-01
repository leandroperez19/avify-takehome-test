const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const host = "localhost";
const port = 5173;

module.exports = {
    mode: "development",
    context: path.resolve(__dirname, "src"),
    target: "web",
    entry: {
        app: ["./index.tsx"],
    },
    output: {
        filename: "[name]-[contenthash:6].bundle.js",
        path: path.join(__dirname, "./build/www"),
        publicPath: `http://${host}:${port}/`,
    },
    resolve: {
        mainFields: ["browser", "module", "main"],
        extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
        plugins: [new TsconfigPathsPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.([jt])s(x?)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: "file-loader?name=img/[name]-[contenthash:6].[ext]",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.svg$/,
                loader: "svg-inline-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name]-[contenthash:6].css",
            chunkFilename: "[id].css",
        }),
        new Dotenv(),
    ],
    devServer: {
        port,
        host,
        static: path.resolve(__dirname, "src"),
        historyApiFallback: true,
    },
};

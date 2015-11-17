module.exports = {
    context: __dirname + "/src",
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "index.js",
        library: true,
        libraryTarget: "commonjs2"
    }
};

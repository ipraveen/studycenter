const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const express = require("express");
var path = require("path");
var public = path.join(__dirname, "public");

function setup(app) {
    app.use("/api", express.static(path.join(__dirname, "src/api")));
    app.use("/images", express.static(path.join(__dirname, "src/images")));
}

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        setup: setup
    }
});

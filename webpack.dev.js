const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const express = require("express");
var path = require("path");
var public = path.join(__dirname, "public");

function setup(app) {
    // app.get('/data/javascript.json', function(req, res) {
    //     res.json({ custom: 'response' });
    //   });

    app.use("/", express.static(public));
}

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        setup: setup
    }
});

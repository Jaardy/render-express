const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
console.log(path.join(__dirname, "../dist"));
// serve up static files (e.g. html and css files)
app.use("/test", express.static(path.join(__dirname, "../dist")));

module.exports = app;

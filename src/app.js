const express = require("express");
const path = require("path");
const app = express();
console.log(path.resolve(__dirname, "../dist"));
console.log(path.join(__dirname, "../dist"));
// console.log(path.join(__dirname.slice(-4), "../dist"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// serve up static files (e.g. html and css files)
app.use(express.static(path.resolve(__dirname, "../public")));

module.exports = app;

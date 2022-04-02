var express = require("express");
const { response } = require("express");
const { render } = require("ejs");
const colors = require("colors")
var app = express();
require('dotenv').config({ path: "./config.env" })
const PORT = process.env.PORT || 8080;
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home");
});
app.get("/designs", function (req, res) {
  res.render("designs");
});
app.get("/projects", function (req, res) {
  res.render("projects");
});
app.get("/aboutme", function (req, res) {
  res.render("aboutme");
});
app.get("/contact", function (req, res) {
  res.render("contact");
});

app.listen(PORT, () => console.log(
    `Server is on live in`.brightMagenta.bold + `\n@...@\n#...#\n%...%\n#...#\n&...&\n`.green + `{ ${process.env.NODE_ENV} }`.brightGreen.bold + ` mode on port `.black.bold.dim.italic +
    `{ ${PORT} }`.brightMagenta +
    `\n\n ------------- `.america + `CHNsBOT`.trap + ` -------------\n`.america)
);

var express = require("express");
const { response } = require("express");
const { render } = require("ejs");
var app = express();
const port = process.env.PORT || 8080;
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

app.listen(port, () => console.log("Started.............."));

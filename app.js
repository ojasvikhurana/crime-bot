var express = require("express");
var app = express();
var bodyParser= require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.get("/", function(req, res) {
	res.render("index");
});

app.get("/aboutus", function(req, res) {
	res.render("aboutus");
});

app.get("/contacts", function(req, res) {
	res.render("contacts");
});

app.get("/crimebot", function(req, res) {
	res.render("crimebot");
});

app.get("/faqs", function(req, res) {
	res.render("faqs");
});

app.get("/helpline", function(req, res) {
	res.render("helpline");
});

app.get("/login", function(req, res) {
	res.render("login");
});

app.get("/missing", function(req, res) {
	res.render("missing");
});

app.listen(3000 || process.env.PORT, function() {
	console.log("CrimeBot is Listening!");
})
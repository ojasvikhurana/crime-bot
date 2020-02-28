var express = require("express");
var app = express();
var bodyParser= require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");
var Fir = require("./models/fir");
var PoliceOrg = require("./models/policeorg")

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// mongoose.connect("mongodb://localhost:27017/crimebot");
mongoose.connect("mongodb+srv://****:****@cluster0-ulpnb.mongodb.net/test?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() => {
	console.log("Connected to DB!");
}).catch(err => {
	console.log("Error: ", err.message);
});

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// ================================
// 	ROUTES
// ================================

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

app.get("/:id/fir", function(req, res) {
	res.render("userloggedin");
});

app.get("/:pid/complaints", function(req, res) {
	res.render("pindex");
});

app.get("/:pid/missing", function(req, res) {
	res.render("pmissing");
});

app.listen(process.env.PORT || 3000, function() {
	console.log("CrimeBot is Listening!");
});

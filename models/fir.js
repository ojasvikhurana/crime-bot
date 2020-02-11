var mongoose = require("mongoose");

var firSchema = new mongoose.Schema({
	name: String,
	gender: String,
	parentage: String,
	DOB: Date,
	phonenumber: String,
	emailid: String,
	address: String,
	district: String,
	state: String,
	aadhar: String
});

module.exports = mongoose.model("Fir_crimebot", firSchema);
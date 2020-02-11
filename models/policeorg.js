var mongoose = require("mongoose");

var policeSchema = new mongoose.Schema({
	State: String,
	District: String,
	fir: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Fir"
		}
	]
});

module.exports = mongoose.model("PoliceOrg_crimebot", policeSchema);
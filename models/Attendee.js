const mongoose = require("mongoose");

const AttendeeSchema = mongoose.Schema({
	email: String,
	fullName: String,
	picture: String,
	foodOptions: {
		breakfast: String,
		snacks: String,
		lunch: String,
		dinner: String,
	},
});

module.exports = mongoose.model("Attendee", AttendeeSchema);

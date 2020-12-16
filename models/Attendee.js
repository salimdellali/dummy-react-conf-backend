const mongoose = require('mongoose');

const AttendeeSchema = mongoose.Schema(
	{
		email: {
			type: String,
			trim: true,
			lowercase: true,
			unique: true,
			required: 'Email address is required',
			match: [
				/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
				'Please fill a valid email address',
			],
		},
		fullName: { type: String, required: true },
		picture: { type: String, required: true },
		foodOptions: {
			breakfast: {
				type: String,
				enum: ['Classic', 'English', 'No preference'],
				required: true,
			},
			snacks: {
				type: String,
				enum: ['Healthy', 'Regular', 'No preference'],
				required: true,
			},
			lunch: {
				type: String,
				enum: ['Healthy', 'Fast Food', 'No preference'],
				required: true,
			},
			dinner: {
				type: String,
				enum: ['Healthy', 'Fast Food', 'No preference'],
				required: true,
			},
		},
	},
	{ collection: 'attendees' }
);

module.exports = mongoose.model('Attendee', AttendeeSchema);

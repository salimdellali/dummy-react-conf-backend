// import npm packages
const express = require('express');
const router = express.Router();
const Attendee = require('../../models/Attendee');

// Get all attendees
router.get('/', (req, res) => {
	console.log('Getting all attendees ...');
	Attendee.find({})
		.exec()
		.then((attendee) => {
			console.log(attendee);
			res.json(attendee);
		})
		.catch((err) => {
			res.json({ message: 'error has occured : ' + err });
		});
});

module.exports = router;

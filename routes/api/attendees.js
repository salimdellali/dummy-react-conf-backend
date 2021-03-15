// import npm packages
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// User Model
const Attendee = require('../../models/Attendee');

/**
 * @route	GET api/attendees
 * @desc	Get all attendees
 * @access	Public
 */
router.get('/', (req, res) => {
	Attendee.find()
		.exec()
		.then((attendees) => {
			res.json(attendees);
		})
		.catch((err) => {
			res.json({ message: 'error has occured : ' + err });
		});
});

/**
 * @route POST api/attendees
 * @desc Add new attendee
 * @desc Public
 */
router.post('/', (req, res) => {
	const newAttendee = new Attendee(JSON.parse(JSON.stringify(req.body)));
	newAttendee.save().then((attendee) => res.json(attendee));
});

/**
 * @route PUT api/attendees
 * @desc Update attendee
 * @desc PRIVATE
 */
router.put('/', auth, (req, res) => {
	// const updatedAttendee = new Attendee(JSON.parse(JSON.stringify(req.body)));
	// updatedAttendee.save().then((attendee) => res.json(attendee));
	Attendee.findOneAndUpdate({ _id: req.body._id }, req.body)
		.exec()
		.then((attendee) => {
			res.json(attendee);
		})
		.catch((err) => {
			res.json({ message: 'error has occured : ' + err });
		});
});

/**
 * @route DELETE api/attendees
 * @desc Delete attendee
 * @desc PRIVATE
 */
router.delete('/:id', auth, (req, res) => {
	Attendee.findById(req.params.id)
		.then((attendee) =>
			attendee.remove().then(() => res.json({ success: true }))
		)
		.catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;

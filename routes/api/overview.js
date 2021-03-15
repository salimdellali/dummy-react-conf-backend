// import npm packages
const express = require('express');
const router = express.Router();
// const auth = require('../../middleware/auth');

// Models
const ConferenceInformation = require('../../models/ConferenceInformation');
const Attendee = require('../../models/Attendee');
const Schedule = require('../../models/Schedule');
const Speaker = require('../../models/Speaker');

/**
 * @route GET api/overview
 * @desc Get all conference information & the statistics
 * @access Public
 */
router.get('/', (req, res) => {
	// Preparing the DB calls as promises
	const getConferenceInformation = () => {
		return ConferenceInformation.findOne().exec();
	};

	const getCountSpeakers = () => {
		return new Promise((resolve, reject) => {
			Speaker.countDocuments({}, (err, count) => {
				err ? reject(err) : resolve(count);
			});
		});
	};

	const getCountAttendees = () => {
		return new Promise((resolve, reject) => {
			Attendee.countDocuments({}, (err, count) => {
				err ? reject(err) : resolve(count);
			});
		});
	};

	const getCountSchedules = () => {
		return new Promise((resolve, reject) => {
			// Schedule.countDocuments({}, (err, count) => {
			// 	err ? reject(err) : resolve(count);
			// });
			Schedule.find()
				.exec()
				.then((schedules) => {
					let count = 0;
					schedules.forEach((schedule) => {
						count += schedule.sessions.length;
					});
					resolve(count);
				});
		});
	};

	// parallel execution and proceeding to res.json() after all promises has been resolved
	Promise.all([
		getConferenceInformation(),
		getCountSpeakers(),
		getCountAttendees(),
		getCountSchedules(),
	]).then(
		([
			conferenceInformation,
			numberOfSpeakers,
			numberOfAttendees,
			numberOfSessions,
		]) => {
			res.json({
				conferenceInformation,
				numberOfSpeakers,
				numberOfAttendees,
				numberOfSessions,
			});
		}
	);

	// let overview = {};
	// ConferenceInformation.findOne()
	// 	.exec()
	// 	.then((ci) => {
	// 		overview.conferenceInformation = ci;
	// 	})
	// 	.then(() => {
	// 		Speaker.countDocuments({}, (err, count) => {
	// 			if (err) res.json({ message: 'error has occured : ' + err });
	// 			else overview.numberOfSpeakers = count;
	// 		});
	// 	})
	// 	.then(() => {
	// 		Attendee.countDocuments({}, (err, count) => {
	// 			if (err) res.json({ message: 'error has occured : ' + err });
	// 			else overview.numberOfAttendees = count;
	// 		});
	// 	})
	// 	.then(() => {
	// 		Schedule.countDocuments({}, (err, count) => {
	// 			if (err) res.json({ message: 'error has occured : ' + err });
	// 			else overview.numberOfSessions = count;
	// 			res.json(overview);
	// 		});
	// 	})
	// 	.catch((err) => {
	// 		res.json({ message: 'error has occured : ' + err });
	// 	});
});

module.exports = router;

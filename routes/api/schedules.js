// import npm packages
const express = require('express');
const router = express.Router();
const Schedule = require('../../models/Schedule');

// Get all schedules
router.get('/', (req, res) => {
    console.log('Getting all schdules ...');
    Schedule.find({})
        .exec()
        .then((schedules) => {
            console.log(schedules);
            res.json(schedules);
        })
        .catch((err) => {
            res.json({ message: 'error has occured : ' + err });
        });
});

module.exports = router;
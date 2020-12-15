// import npm packages
const express = require('express');
const router = express.Router();
const Speaker = require('../../models/Speaker');

// Get all speakers
router.get('/', (req, res) => {
    console.log('Getting all speakers ...');
    Speaker.find({})
        .exec()
        .then((speakers) => {
            console.log(speakers);
            res.json(speakers);
        })
        .catch((err) => {
            res.json({ message: 'error has occured : ' + err });
        })
});

// Generic error handler used by all endpoints.
// function handleError(res, reason, message, code) {
//     console.log("ERROR: " + reason);
//     res.status(code || 500).json({ "error": message });
// }

module.exports = router;
const mongoose = require('mongoose');

const SpeakerSchema = mongoose.Schema({
    gender: String,
    name: {
        title: String,
        first: String,
        last: String
    },
    profession: String,
    email: String,
    phone: String,
    cell: String,
    picture: {
        large: String,
        medium: String,
        thumbnail: String
    },
    nat: String
});

module.exports = mongoose.model('Speakers', SpeakerSchema);
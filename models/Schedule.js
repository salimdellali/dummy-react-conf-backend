const mongoose = require('mongoose');

const ScheduleSchema = mongoose.Schema({
    description: String,
    sessions: [{
        _id: String,
        time: String,
        description: String,
        speakers: [String]
    }]
});

module.exports = mongoose.model('Schedules', ScheduleSchema);
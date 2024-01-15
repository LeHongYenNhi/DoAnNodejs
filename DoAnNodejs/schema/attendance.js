var mongoose = require("mongoose");

const schema = new mongoose.Schema({
    time_attendance: Date,
    status: String,
    event_k: {
        type: mongoose.Schema.ObjectId,
        ref: 'event'
    },
    user_k: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    accumulatedpoint_k: {
        type: mongoose.Schema.ObjectId,
        ref: 'accumulatedpoint'
    }
});

module.exports = mongoose.model('attendance', schema);;
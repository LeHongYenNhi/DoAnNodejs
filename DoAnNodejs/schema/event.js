var mongoose = require("mongoose");

const schema = new mongoose.Schema({
    event_name: String,
    describe: String,
    time_start: Date,
    quantity: Number,
    isdelete: Boolean,
    point: Number,
    user_k: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    }
});

schema.virtual('attendance', {
    ref: 'attendance',
    localField: '_id',
    foreignField: 'event_k'
});

module.exports = mongoose.model('event', schema);;
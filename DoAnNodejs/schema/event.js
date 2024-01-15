var mongoose = require("mongoose");

const schema = new mongoose.Schema({
    event_name: String,
    describe: String,
    time_start: Date,
    time_create: Date,
    quantity: Number,
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
})
schema.set('toJSON', { virtuals: true });
schema.set('toObject', { virtuals: true });

module.exports = mongoose.model('event', schema);;
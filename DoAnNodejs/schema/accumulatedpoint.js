var mongoose = require("mongoose");

const schema = new mongoose.Schema({
    total_score: Number,
    year: Number,
    user_k: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    }
});

schema.virtual('attendance', {
    ref: 'attendance',
    localField: '_id',
    foreignField: 'accumulatedpoint_k'
});
schema.set('toJSON', { virtuals: true });
schema.set('toObject', { virtuals: true });

module.exports = mongoose.model('accumulatedpoint', schema);;
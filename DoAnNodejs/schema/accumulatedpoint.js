var mongoose = require("mongoose");

const schema = new mongoose.Schema({
    total_score: Number,
    year: Number,
    isdelete: Boolean,
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

module.exports = mongoose.model('accumulatedpoint', schema);;
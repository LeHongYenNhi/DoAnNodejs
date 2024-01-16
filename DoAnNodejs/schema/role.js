var mongoose = require("mongoose");

const schema = new mongoose.Schema({
    role_name: String
});

schema.virtual('user', {
    ref: 'user',
    localField: '_id',
    foreignField: 'role_k'
});

module.exports = mongoose.model('role', schema);;
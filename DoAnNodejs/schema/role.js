var mongoose = require("mongoose");

const schema = new mongoose.Schema({
    role_name: String
});

module.exports = mongoose.model('role', schema);;
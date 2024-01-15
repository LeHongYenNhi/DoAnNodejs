var SchemaAttendance = require('../schema/attendance')

module.exports = {
    getall: function(query) {
        return SchemaAttendance.find().sort();
    }
}
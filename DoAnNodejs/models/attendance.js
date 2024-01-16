var SchemaAttendance = require('../schema/attendance')

module.exports = {
    getall: function(query) {
        return SchemaAttendance.find().sort();
    },
    findByIdAndDelete: function(id) { ///lỗi
        return SchemaAttendance.findByIdAndDelete(id);
    }
}
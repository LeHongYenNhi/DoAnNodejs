var SchemaAccumulation = require('../schema/accumulatedpoint')

module.exports = {
    getall: function(query) {
        return SchemaAccumulation.find({ year: query }).sort();
    },
    findByIdAndUpdate: function(id, user) { ///lỗi
        return SchemaAccumulation.findByIdAndUpdate(id, user);
    },
    findByIdAndDelete: function(id) { ///lỗi
        return SchemaAccumulation.findByIdAndUpdate(id, { isdelete: true });
    }
}
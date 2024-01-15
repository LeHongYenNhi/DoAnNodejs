var SchemaAccumulation = require('../schema/accumulatedpoint')

module.exports = {
    getall: function(query) {
        return SchemaAccumulation.find().sort();
    }
}
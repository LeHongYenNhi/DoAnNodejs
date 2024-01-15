var SchemaRole = require('../schema/role')

module.exports = {
    getall: function(query) {
        return SchemaRole.find().sort();
    }
}
var SchemaEvent = require('../schema/event')

module.exports = {
    getall: function(query) {
        var sort = {};
        var Search = {};
        if (query.sort) {
            if (query.sort[0] == '-') {
                sort[query.sort.substring(1)] = 'desc';
            } else {
                sort[query.sort] = 'asc';
            }
        }
        if (query.key) {
            Search.event_name = new RegExp(query.key, 'i');
        }
        var limit = parseInt(query.limit) || 2;
        var page = parseInt(query.page) || 1;
        var skip = (page - 1) * limit;
        return SchemaEvent.find(Search).select('event_name describe').sort(sort).limit(limit).skip(skip).exec();
    },
    getByName: function(name) {
        return SchemaEvent.findOne({ event_name: name }).exec();
    }
}
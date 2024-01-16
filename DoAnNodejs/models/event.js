var SchemaEvent = require('../schema/event')

module.exports = {
    getall: function(query) {
        return SchemaEvent.find({ isdelete: "false" }).sort();
    },
    getByName: function(name) {
        return SchemaEvent.findOne({ event_name: name }).exec();
    },
    getOne: function(id) {
        return SchemaEvent.findById(id);
    },
    getByName: function(name) {
        return SchemaEvent.findOne({ event_name: name }).exec();
    },
    createEvent: function(event) {
        return new SchemaEvent(event).save();
    },
    findByIdAndUpdate: function(id, user) {
        return SchemaEvent.findByIdAndUpdate(id, user);
    },
    findByIdAndDelete: function(id) { ///lỗi
        return SchemaEvent.findByIdAndUpdate(id, { isdelete: true });
    }
}
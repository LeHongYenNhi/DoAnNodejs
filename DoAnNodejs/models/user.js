var SchemaUser = require('../schema/user')

module.exports = {
    getall: function(query) {
        return SchemaUser.find({ isdelete: "false" }).sort({ userName: 1 });
    },
    getOne: function(id) {
        return SchemaUser.findById(id);
    },
    getByName: function(name) {
        return SchemaUser.findOne({ userName: name }).exec();
    },
    createUser: function(user) {
        return new SchemaUser(user).save();
    },
    login: function(userName, password) {
        return SchemaUser.checkLogin(userName, password);
    },
    getByEmail: function(email) {
        return SchemaUser.findOne({ email: email }).exec();
    },
    getByTokenForgot: function(token) {
        return SchemaUser.findOne({
            tokenForgot: token,
            tokenForgotExp: { $gte: Date.now() }
        }).exec();
    },
    findByIdAndUpdate: function(id, user) {
        return SchemaUser.findByIdAndUpdate(id, user);
    },
    findByIdAndDelete: function(id) {
        return SchemaUser.findByIdAndUpdate(id, { isdelete: true });
    }
}
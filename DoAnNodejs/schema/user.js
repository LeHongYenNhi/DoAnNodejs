var mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const configs = require('../helper/configs')

const schema = new mongoose.Schema({
    email: String,
    userName: String,
    password: String,
    role: String,
    tokenForgot: String,
    tokenForgotExp: String,
    fullname: String,
    gender: String,
    accumulation_k: {
        type: mongoose.Schema.ObjectId,
        ref: 'accumulatedpoint'
    }
});

schema.virtual('event', {
    ref: 'event',
    localField: '_id',
    foreignField: 'user_k'
});
schema.virtual('attendance', {
    ref: 'attendance',
    localField: '_id',
    foreignField: 'user_k'
});
schema.virtual('accumulatedpoint', {
    ref: 'accumulatedpoint',
    localField: '_id',
    foreignField: 'user_k'
});
schema.set('toJSON', { virtuals: true });
schema.set('toObject', { virtuals: true });

schema.pre('save', function(next) {
    if (!this.isModified("password")) {
        return next();
    }
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
    next();
})

schema.methods.getJWT = function() {
    var token = jwt.sign({ id: this._id }, configs.SECRET_KEY, { expiresIn: configs.EXP });
    return token;
}

schema.methods.addTokenForgotPassword = function() {
    var tokenForgot = crypto.randomBytes(31).toString('hex');
    this.tokenForgot = tokenForgot;
    this.tokenForgotExp = Date.now() + 15 * 60 * 1000;
    return tokenForgot;
}

schema.statics.checkLogin = async function(userName, password) {
        if (!userName || !password) {
            return { err: 'Hãy nhập đầy đủ username va password' };
        }
        var user = await this.findOne({ userName: userName });
        if (!user) {
            return { err: 'userName không tồn tại' };
        }
        var result = bcrypt.compareSync(password, user.password);
        if (!result) {
            return { err: 'password sai' };
        }
        console.log(user);
        return user;
    }
    //JWT

module.exports = mongoose.model('user', schema);;
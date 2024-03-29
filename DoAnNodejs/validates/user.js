const { body } = require('express-validator');
const message = require('../helper/message');
const util = require('util')

var options = {
    username: {
        min: 6,
        max: 80
    },
    password: {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    },
    roles: ['admin', 'user', 'specialuser']
}

module.exports = {
    validator: function() {
        return [
            body('userName', util.format(message.size_string_message, 'userName',
                options.username.min, options.username.max)).isLength(options.username),
            body('email', 'email phải đúng định dạng').isEmail(),
            body('password', 'password không mạnh').isStrongPassword(options.password),
            body('role', 'role không hợp lệ').isIn(options.roles)
        ]
    },
}
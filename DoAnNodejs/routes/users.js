var express = require('express');
const { model } = require('mongoose');
const { use } = require('.');
var router = express.Router();
var responseData = require('../helper/responseData');
var modelUser = require('../models/user')
var validate = require('../validates/user')
const { validationResult } = require('express-validator');


/* GET users listing. */
router.get('/', async function(req, res, next) {
    console.log(req.query);
    var usersAll = await modelUser.getall(req.query);
    responseData.responseReturn(res, 200, true, usersAll);
    //res.render('test.ejs', { people: usersAll });
});
router.get('/:id', async function(req, res, next) { // get by ID
    try {
        var user = await modelUser.getOne(req.params.id);
        responseData.responseReturn(res, 200, true, user);
    } catch (error) {
        responseData.responseReturn(res, 404, false, "khong tim thay user");
    }
});
router.post('/add', validate.validator(),
    async function(req, res, next) {
        var errors = validationResult(req);
        if (!errors.isEmpty()) {
            responseData.responseReturn(res, 400, false, errors.array().map(error => error.msg));
            return;
        }
        var user = await modelUser.getByName(req.body.userName);
        if (user) {
            responseData.responseReturn(res, 404, false, "user da ton tai");
        } else {

            const newUser = await modelUser.createUser({
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role,
                fullname: req.body.fullname,
                gender: req.body.gender,
                isdelete: false
            })

            responseData.responseReturn(res, 200, true, newUser);
        }
    });
router.put('/edit/:id', async function(req, res, next) {
    try {
        var user = await modelUser.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' });
        responseData.responseReturn(res, 200, true, user);
    } catch (error) {
        responseData.responseReturn(res, 404, false, "khong tim thay user");
    }
});
router.put('/delete/:id', function(req, res, next) { ///lỗi
    try {
        var user = modelUser.findByIdAndDelete(req.params.id);
        responseData.responseReturn(res, 200, true, user);
    } catch (error) {
        responseData.responseReturn(res, 404, false, "lỗi");
    }
});

module.exports = router;
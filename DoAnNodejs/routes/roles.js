var express = require('express');
const { model } = require('mongoose');
const { use } = require('.');
var router = express.Router();
var responseData = require('../helper/responseData');
var modelRole = require('../models/role')


router.get('/', async function(req, res, next) {
    console.log(req.query);
    var rolesAll = await modelRole.getall(req.query);
    responseData.responseReturn(res, 200, true, rolesAll);
});

module.exports = router;
var express = require('express');
const { model } = require('mongoose');
const { use } = require('.');
var router = express.Router();
var responseData = require('../helper/responseData');
var modelAccumulation = require('../models/accumulatedpoint')


router.get('/', async function(req, res, next) {
    console.log(req.query);
    var accumulationAll = await modelAccumulation.getall(req.query);
    responseData.responseReturn(res, 200, true, accumulationAll);
});

module.exports = router;
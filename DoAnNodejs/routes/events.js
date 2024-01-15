var express = require('express');
const { model } = require('mongoose');
const { use } = require('.');
var router = express.Router();
var responseData = require('../helper/responseData');
var modelEvent = require('../models/event')


router.get('/', async function(req, res, next) {
    console.log(req.query);
    var eventsAll = await modelEvent.getall(req.query);
    responseData.responseReturn(res, 200, true, eventsAll);
});

module.exports = router;
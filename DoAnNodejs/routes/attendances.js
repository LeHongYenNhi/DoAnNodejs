var express = require('express');
const { model } = require('mongoose');
const { use } = require('.');
var router = express.Router();
var responseData = require('../helper/responseData');
var modelAttendance = require('../models/attendance')


router.get('/', async function(req, res, next) {
    console.log(req.query);
    var attendancesAll = await modelAttendance.getall(req.query);
    responseData.responseReturn(res, 200, true, attendancesAll);
});
router.put('/delete/:id', function(req, res, next) { ////lỗi
    try {
        var attendance = modelAttendance.findByIdAndDelete(req.params.id);
        responseData.responseReturn(res, 200, true, "thành công");
    } catch (error) {
        responseData.responseReturn(res, 404, false, "lỗi");
    }
});

module.exports = router;
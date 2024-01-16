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
router.put('/edit/:id', async function(req, res, next) {
    try {
        var accumulation = await modelAccumulation.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' });
        responseData.responseReturn(res, 200, true, accumulation);
    } catch (error) {
        responseData.responseReturn(res, 404, false, "lỗi");
    }
});
router.put('/delete/:id', function(req, res, next) { ////lỗi
    try {
        var accumulation = modelAccumulation.findByIdAndDelete(req.params.id);
        responseData.responseReturn(res, 200, true, "thành công");
    } catch (error) {
        responseData.responseReturn(res, 404, false, "lỗi");
    }
});

module.exports = router;
var express = require('express');
const { model } = require('mongoose');
const { use } = require('.');
var router = express.Router();
var responseData = require('../helper/responseData');
var modelEvent = require('../models/event')


router.get('/', async function(req, res, next) {
    console.log(req.query);
    var events = await modelEvent.getall(req.query);
    //responseData.responseReturn(res, 200, true, events);
    res.render('index', { event: events });
});

router.get('/:id', async function(req, res, next) { // get by ID 
    var event = await modelEvent.getOne(req.params.id);
    res.render('detail', { event: event });
});
router.post('/add',
    async function(req, res, next) {

        var event = await modelEvent.getByName(req.body.event_name);
        if (event) {
            responseData.responseReturn(res, 404, false, "event da ton tai");
        } else {

            const newEvent = await modelEvent.createEvent({
                event_name: req.body.event_name,
                describe: req.body.describe,
                time_start: req.body.time_start,
                quantity: req.body.quantity,
                point: req.body.point,
                isdelete: false
            })

            responseData.responseReturn(res, 200, true, newEvent);
        }
    });
router.put('/edit/:id', async function(req, res, next) {
    try {
        var event = await modelEvent.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' });
        responseData.responseReturn(res, 200, true, "thành công");
    } catch (error) {
        responseData.responseReturn(res, 404, false, "khong tim thay event");
    }
});
router.put('/delete/:id', function(req, res, next) {
    try {
        var event = modelEvent.findByIdAndDelete(req.params.id);
        responseData.responseReturn(res, 200, true, "xoa thanh cong");
    } catch (error) {
        responseData.responseReturn(res, 404, false, "khong tim thay event");
    }
});

module.exports = router;
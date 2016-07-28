/**
 * Created by Vivek Kumar on 19/12/2015.
 */
var express = require('express'),
    router = express.Router(),
    moment = require('moment');
var cors = require('cors');
var config = require('../../config/config.js');
var fs = require('fs');
var request = require("request");
module.exports = function (app) {
    app.use('/', router);
    app.use(cors());
};


function sendResponse(url, res) {
    var options = {
        method: 'POST',
        url: url,
        headers: {
            'user-key': '98b2f5865800bbb883eadb53f7d908af',
            accept: 'application/json'
        }
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.send(body);
    });
}


router.get('/categories', function (req, res) {

    sendResponse('https://developers.zomato.com/api/v2.1/categories', res);

})

router.get('/', function (req, res) {
    console.log('Hell World');
    res.send('Hello world!.')

})


router.get('/callback', function (req, res) {

    res.send("")

})

router.post('/search', function (req, res) {

    var obj = req.body[0];
    console.log(obj.cityId);
    console.log('https://developers.zomato.com/api/v2.1/search?entity_id=' + obj.cityId + '&entity_type=city&radius=' + obj.radius + '&cuisines=' + obj.cuisines + '&category=' + obj.category);

    sendResponse('https://developers.zomato.com/api/v2.1/search?entity_id=' + obj.cityId + '&entity_type=city&radius=' + obj.radius + '&cuisines=' + obj.cuisines + '&category=' + obj.category, res);

})

router.get('/collection/cities/:city_id', function (req, res) {

    sendResponse('https://developers.zomato.com/api/v2.1/search?collection_id=' + req.params.city_id, res);

})

router.get('/collection/cuisines/:city_id', function (req, res) {

    sendResponse('https://developers.zomato.com/api/v2.1/cuisines?city_id=' + req.params.city_id, res);


})


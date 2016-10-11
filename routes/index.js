var express = require('express'),
    Message = require('../models/Message'),
    shortid = require('shortid'),
    AWS = require('aws-sdk'),
    router = express.Router();


router.get('/', function (req, res) {
    res.render('index');
});

router.get('/teststorage', function (req, res) {
    var o = new Message({
      id: shortid.generate(),
      data: shortid.generate()
    });
    o.save();
    res.sendStatus(200);
    console.log("We made it...");
});

router.get('/messages/show', function (req, res) {
    Message.scan().exec( function (err, messages) {
      //send messages back as stringified json
      var obj = messages;
      if (err) {console.log(err)}
        res.setHeader('Content-type', 'application/json');
        res.send(JSON.stringify(obj))
    });
});

router.get('/ping', function (req, res) {
    res.render('index.html');
});

module.exports = router;

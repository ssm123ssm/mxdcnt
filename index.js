var express = require('express');
var port = 80;

var app = express();

app.listen(process.env.PORT || port, function () {
    console.log('Started');
});

app.get('/', function (req, res) {
    res.send('WORKS');
});

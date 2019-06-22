var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
var cors = require('cors');
var port = 80;

var app = express();
app.use(cors());
app.use(bodyParser.json({
    limit: '50mb'
})); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    limit: '50mb',
    extended: true
}));

app.listen(process.env.PORT || port, function () {
    console.log('Started');
});

app.get('/', function (req, res) {
    res.send('Works...');
});

app.post('/post', function (req, res) {
    var url = req.body.url;
    var data = req.body;
    console.log("POST REQUEST TO: " + url);
    axios.post(url, data).then(function (response) {
        console.log(response.data);
        res.send(response.data);
    }).catch(function (error) {
        console.log(error);
        res.send('error');
    })
});

app.get('/get', function (req, res) {
    var url = req.query.url;
    var params = req.query;
    //params.delete['url'];
    console.log('Getting the Address...');
    axios.get(url, {
        params: params
    }).then(function (response) {
        console.log(response.data);
        res.send(response.data);
    }).catch(function (error) {
        console.log('error');
        res.send('error');
    })
});

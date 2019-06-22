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
    console.log(url, data);
    axios.post(url, data).then(function (response) {
        console.log(response.data);
        res.send(response.data);
    }).catch(function (error) {
        console.log(error);
        res.send('error');
    })
});

app.get('/get', function (req, res) {
    var url = req.params.url;
    console.log(url);
    axios.get(url).then(function (response) {
        console.log(response.data);
        res.send(response.data);
    }).catch(function (error) {
        console.log(error);
        res.send('error');
    })
});

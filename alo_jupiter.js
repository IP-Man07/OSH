var express = require('express');
var app = express();

app.get('/', function (req, res) {
res.send('Alô, mundo!\n');
});

app.get('/jupiter', function (req, res) {
    res.send('Alô, Júpiter!\n');
});

app.listen(8080, function () {
console.log('Example app listening on port 8080!');
});
module.exports = app;

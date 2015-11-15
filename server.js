var express = require('express');
var fs = require('fs');
var app = express();
var scrape = require('./scrape.js');

app.set('json spaces', 4);

app.get('/scrape', function (req, res) {
    url = 'http://www.gumtree.com.au/s-dressers-drawers/perth/hemnes/k0c21015l3008303';
    scrape.scrape(url, function (results) {
        res.json(results);
    })
})

app.listen('8081')
exports = module.exports = app;
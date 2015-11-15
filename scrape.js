var request = require('request');
var cheerio = require('cheerio');

var exports = module.exports = {};

exports.scrape = function (url, callback) {

    request(url, function (error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);

            var results = $('#srchrslt-adtable li').map(function (v) {
                var id = $('.add-to-watchlist', this).attr('data-adid');
                var title = $('.rs-ad-title a span', this).text().trim();
                var description = $('.rs-ad-description', this).text().trim();
                var price = $('.j-original-price', this).first().text().trim();
                var location = $('.rs-ad-location-suburb', this).text().trim();
                var date = $('.rs-ad-date', this).text().trim();
                var imgUrl = $('img', this).attr('src');

                return {
                    id: id,
                    title: title,
                    description: description,
                    price: price,
                    location: location,
                    date: date,
                    imgUrl: imgUrl
                };
            });

            console.log(results.get());
            return callback(results.get());
        }
    })
};
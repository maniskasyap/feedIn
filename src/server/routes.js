var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');

var Twit = require('../../node_modules/twit/lib/twitter');

var T = new Twit({
    consumer_key: 'BMyZguekdL4eKQkmKWQRIJitE',
    consumer_secret: 'TWc2gjbPB9EVeMpZaE2l9BTiYtNFZX9H7DGPzKRHfToXMbqONy',
    access_token: '1081886941-tBQXcc03adb98iAgPa44QCzEFZ2T9bfO8IRe8JO',
    access_token_secret: 'kKTaNGd3R6QBB6lWpBGSgnCjoSkFBfvCmpWEUC2BKN4au',
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
});

router.get('/feeds/twitter/:countryId', getTopTrending_twitter);
router.get('/countries/twitter', getPlaces_twitter);
router.get('/people', getPeople);
router.get('/person/:id', getPerson);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getPeople(req, res, next) {
    res.status(200).send(data.people);
}

function getPerson(req, res, next) {
    var id = +req.params.id;
    var person = data.people.filter(function(p) {
        return p.id === id;
    })[0];

    if (person) {
        res.status(200).send(person);
    } else {
        four0four.send404(req, res, 'person ' + id + ' not found');
    }
}

function getTopTrending_twitter(req, res, next) {
    T.get('https://api.twitter.com/1.1/trends/place.json', { id: req.params.countryId }, function(err, data, response) {
        // console.log(data);
        return res.send(data);
    });
}

function getPlaces_twitter(req, res, next) {
    T.get('https://api.twitter.com/1.1/trends/available.json', function(err, data, response) {
        return res.send(data);
    });
}

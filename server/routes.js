/*jslint unparam:true*/

'use strict';

var dataLoader = require('./libs/loader.js');
var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId : '21eeeb58e5404d4db1b5c78bef326602',
  clientSecret : '7dc51e1f0e8b4ddaa36a29729738d1e7',
  redirectUri : 'http://127.0.0.1/callback'
})

var basicHandler = function (promise, req, res) {
  promise
    .fail(function (err) {
      res.status(500).send(err);
    })
    .then(function (data) {
      res.status(200).send(data);
    });
};

module.exports = function (app) {

  app.get('/api/search/:query', function (req, res) {
    // Search tracks whose name, album or artist contains 'Love'
    spotifyApi.searchTracks(req.params.query)
      .then(function(data) {
        res.status(200).send(data.body)
      }, function(err) {
        console.error(err);
      });
  })

};

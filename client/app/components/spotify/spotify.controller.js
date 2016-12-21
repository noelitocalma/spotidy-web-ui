(function () {
  'use strict';

  angular.module('App.components.spotify')
    .controller('spotify', function ($scope, Service) {
      $scope.searchTrack = function () {
        Service.spotify.search.get({
          query: $scope.query
        }, function (res) {
          console.log(res.tracks.items)
          $scope.tracks = res.tracks.items
        })
      }

      $scope.playTrackPreview = function (url, id) {
        // $scope.isAudioPlaying = !$scope.isAudioPlaying
        // var audio;
        //
        // if (audio) audio = ''
        //
        // audio = new Audio(url)
        //
        // !$scope.isAudioPlaying ? audio.play() : audio.pause()
        //
        // $scope.currentPlaying = id
      }
    });

}());

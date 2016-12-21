(function () {
  'use strict';

  angular.module('App')
    .config(function ($routeProvider, Config) {
      $routeProvider
        .when('/spotify', {
          templateUrl: Config.rootPath + 'components/spotify/spotify.html',
          controller: 'spotify'
        })
        .when('/youtube', {
          templateUrl: Config.rootPath + 'components/about/about.html',
          controller: 'about'
        })
        .otherwise({
          redirectTo: '/spotify'
        });
    });

}());

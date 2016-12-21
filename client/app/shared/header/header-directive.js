(function () {
  'use strict';

  angular.module('App.shared.header')
    .directive('appHeader', function (Config) {

      function link(scope) {
        scope.navLinks = [
          {title: 'Spotify', href: 'spotify', icon: ''},
          {title: 'Youtube', href: 'youtube', icon: ''}
        ];
      }

      return {
        templateUrl: Config.rootPath + 'shared/header/header-view.html',
        link: link,
        replace: true
      };
    });

}());

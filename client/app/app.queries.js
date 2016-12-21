(function () {
  'use strict';

  angular.module('App')
    .service('Service', function ($resource, Config) {
      return {
        spotify: {
          search: $resource(Config.apiPath + 'search/:query', {}, {
            get: { method: 'GET' }
          })
        }
      };
    });

}());

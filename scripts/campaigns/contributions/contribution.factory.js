(function() {
  'use strict';

  angular
    .module('contributions')
    .factory('ContributionFactory', [
      '$resource',
      FactoryFunction
    ]);

  function FactoryFunction($resource) {
    var Contributions = $resource('http://localhost:3000/campaigns/:id/contributions',
      { id: '@_id' },
      {
        query: {
          method: 'GET',
          params: {
            id: '@_id'
          },
          isArray: true
        }
      }
    );
    return Contributions;
  }

})();

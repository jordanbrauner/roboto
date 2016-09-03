(function() {
  'use strict';

  angular
    .module('contributions')
    .factory('ContributionFactory', [
      '$resource',
      FactoryFunction
    ]);

  function FactoryFunction($resource) {
    console.log("ContributionFactory function called!");

    var Contributions = $resource('http://localhost:3000/robots/:id/contributions',
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

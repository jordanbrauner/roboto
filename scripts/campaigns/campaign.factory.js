(function() {
  'use strict';

  angular
    .module('campaigns')
    .factory('CampaignFactory', [
      '$resource',
      FactoryFunction
    ]);

  function FactoryFunction($resource) {
    return $resource('http://localhost:3000/campaigns/:id', { id: '@_id' }, {
      update: { method: 'PUT' }
    });
  }

  // function FactoryFunction($resource) {
  //   return $resource("mongodb://" + process.env.MONGODB_URL_RW, {  id: '@_id' }, {
  //     update: { method: "PUT" }
  //   });
  // }

})();

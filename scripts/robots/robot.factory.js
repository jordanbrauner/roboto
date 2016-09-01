(function() {
  'use strict';

  angular
    .module('robots')
    .factory('RobotFactory', [
      '$resource',
      FactoryFunction
    ]);

  function FactoryFunction($resource) {
    return $resource('http://localhost:3000/robots/:id', { id: '@_id' }, {
      update: { method: 'PUT' }
    });
  }

  // function FactoryFunction($resource) {
  //   return $resource("mongodb://" + process.env.MONGODB_URL_RW, {  id: '@_id' }, {
  //     update: { method: "PUT" }
  //   });
  // }

})();

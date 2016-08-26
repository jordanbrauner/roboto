(function() {
  "use strict";

  angular
    .module("corporations")
    .factory("CorporationFactory", [
      "$resource",
      FactoryFunction
    ]);

  function FactoryFunction($resource) {
    return $resource("http://localhost:4000/corporationdata/:id");
  }

})();

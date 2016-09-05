(function() {
  "use strict";

  angular
    .module("campaigns")
    .controller("CampaignIndexController", [
      "CampaignFactory",
      ControllerFunction
    ]);

  function ControllerFunction(CampaignFactory) {
    // Scroll to top of page on state change
    $("html, body").animate({ scrollTop: 0 }, 200);

    var vm = this;

    vm.campaigns = CampaignFactory.query();

  }

})();

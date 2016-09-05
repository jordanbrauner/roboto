(function() {
  "use strict";

  angular
    .module("campaigns")
    .controller("CampaignEditController", [
      "CampaignFactory",
      "$state",
      "$stateParams",
      ControllerFunction
    ]);

  function ControllerFunction(CampaignFactory, $state, $stateParams) {
    // Scroll to top of page on state change
    $("html, body").animate({ scrollTop: 0 }, 200);

    var vm = this;

    vm.campaign = CampaignFactory.get({ id: $stateParams.id });

    // Update function
    vm.update = function() {
      this.campaign.$update({ id: $stateParams.id }).then(function() {
        $state.go("campaignShow", { id: $stateParams.id }, { reload: true });
      });
    };

    // Delete function
    vm.delete = function() {
      this.campaign.$delete({ id: $stateParams.id }).then(function() {
        $state.go("campaignIndex", {}, { reload: true });
      });
    };

  }

})();

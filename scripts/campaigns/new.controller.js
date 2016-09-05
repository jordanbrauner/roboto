(function() {
  "use strict";

  angular
    .module("campaigns")
    .controller( "CampaignNewController", [
      "CampaignFactory",
      "$state",
      "$stateParams",
      ControllerFunction
    ]);

  function ControllerFunction(CampaignFactory, $state, $stateParams) {

    // Scroll to top of page on state change
    $("html, body").animate({ scrollTop: 0 }, 200);

    var vm = this;

    // Campaign#new
    vm.campaign = new CampaignFactory();
    vm.create = function() {
      this.campaign.$save(function(res) {
        $state.go("campaignIndex", {}, { reload: true });
      });
    };

    // Form methods
    vm.formIsVisible = false;
    vm.toggleForm = function() {
      console.log("toggleForm called");
      if (vm.formIsVisible) {
        vm.formIsVisible = false;
      }
      else {
        vm.formIsVisible = true;
      }
    };

  }

})();

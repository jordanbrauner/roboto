(function() {
  "use strict";

  angular
    .module("robots")
    .controller("RobotEditController", [
      "RobotFactory",
      "$state",
      "$stateParams",
      ControllerFunction
    ]);

  function ControllerFunction(RobotFactory, $state, $stateParams) {

    // Scroll to top of page on state change
    $("html, body").animate({ scrollTop: 0 }, 200);

    var vm = this;
    vm.robot = RobotFactory.get({ id: $stateParams.id });

    // Update function
    vm.update = function() {
      this.robot.$update({ id: $stateParams.id }).then(function() {
        $state.go("robotShow", { id: $stateParams.id }, { reload: true });
      });
    };

    // Delete function
    vm.delete = function() {
      this.robot.$delete({ id: $stateParams.id }).then(function() {
        $state.go("robotIndex", {}, { reload: true });
      });
    };

  }

})();

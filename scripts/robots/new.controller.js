(function() {
  "use strict";

  angular
    .module("robots")
    .controller( "RobotNewController", [
      "RobotFactory",
      "$state",
      "$stateParams",
      ControllerFunction
    ]);

  function ControllerFunction(RobotFactory, $state, $stateParams) {

    // Scroll to top of page on state change
    $("html, body").animate({ scrollTop: 0 }, 200);

    var vm = this;

    // Robot#new
    vm.robot = new RobotFactory();
    vm.create = function() {
      this.robot.$save(function(res) {
        $state.go("robotIndex", {}, { reload: true });
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

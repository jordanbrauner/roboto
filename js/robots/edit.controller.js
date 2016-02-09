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

    console.log("edit.controller.js: ControllerFunction called to edit or delete new RobotFactory");
    this.robot = RobotFactory.get({ id: $stateParams.id });

    this.update = function() {
      console.log("edit.controller.js: Update function called.");
      this.robot.$update(function(response) {
        $state.go("robotIndex", {}, { reload: true });
      });
    };

    // Delete function
    this.delete = function() {
      console.log("edit.controller.js: Delete function called.");
      this.robot.$delete(function(response) {
        $state.go("robotIndex", {}, { reload: true });
      });
    };
  }

})();

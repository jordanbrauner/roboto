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

    console.log("new.controller.js: ControllerFunction called to create new RobotFactory");
    this.robot = new RobotFactory();
    this.create = function() {
      console.log("new.controller.js: Create function called.");
      this.robot.$save(function(response) {
        for (var i in response) {
          console.log("new.controller.js: This is the response to $save: " + response[i]);
        }
        $state.go("robotIndex", {}, {reload: true});
      });
    };

    this.formIsVisible = false;
    this.toggleForm = function() {
      console.log("toggleForm called");
      if (this.formIsVisible) {
        this.formIsVisible = false;
      }
      else {
        this.formIsVisible = true;
      }
    };

  }

})();

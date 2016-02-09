(function() {
  "use strict";

  angular
    .module("robots")
    .controller("RobotIndexController", [
      "RobotFactory",
      ControllerFunction
    ]);

  function ControllerFunction(RobotFactory) {

    // Scroll to top of page on state change
    $("html, body").animate({ scrollTop: 0 }, 200);
    
    this.robots = RobotFactory.query();
  }

})();

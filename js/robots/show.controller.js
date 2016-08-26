(function () {
  "use strict";

  angular
    .module("robots")
    .controller("RobotShowController", [
      "RobotFactory",
      '$resource',
      "$stateParams",
      ControllerFunction
    ]);

  function ControllerFunction(RobotFactory, $resource, $stateParams) {

    // Scroll to top of page on state change
    $("html, body").animate({ scrollTop: 0 }, 200);

    var contributing = false;

    this.robot = RobotFactory.get({ id: $stateParams.id });
    this.robots = RobotFactory.query();
  }

})();

(function () {
  "use strict";

  angular
    .module("robots")
    .controller("RobotShowController", [
      "RobotFactory",
      "ContributionFactory",
      "$resource",
      "$stateParams",
      ControllerFunction
    ]);

  function ControllerFunction(RobotFactory, ContributionFactory, $resource, $stateParams) {

    // Scroll to top of page on state change
    $("html, body").animate({ scrollTop: 0 }, 200);

    var vm = this;
    var contributing = false;

    vm.robots = RobotFactory.query();

    vm.robot = RobotFactory.get({ id: $stateParams.id });

    vm.contributions = ContributionFactory.query({ id: $stateParams.id }, function(res) {
      vm.contributions.forEach(function(contribution) {
        contribution.amount = parseFloat(contribution.amount);
      });
    });

    console.log(vm.robots);
    console.log(vm.robot);
    console.log(vm.contributions);

  }

})();

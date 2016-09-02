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

    // Variables: Core
    var vm = this,
        contributing = false;

    // Variables: Contribution
    vm.totalPledged = 0;
    vm.totalContributors = 0;
    vm.daysLeft = 0;
    vm.robotsBuilt = 0;

    // Robot#Index
    vm.robots = RobotFactory.query();

    // Robot#Show
    vm.robot = RobotFactory.get({ id: $stateParams.id });

    // Contribution#Index and calculate contribution variables
    vm.contributions = ContributionFactory.query({ id: $stateParams.id }, function(res) {
      vm.contributions.forEach(function(contribution) {
        contribution.amount = parseFloat(contribution.amount);
        vm.totalPledged += parseFloat(contribution.amount);
        vm.totalContributors++;
      });
    });

    vm.contributions.new = new ContributionFactory();

    vm.contributions.create = function() {
      this.contributions.new.$save(function(res) {
        for (var i in res) {
          console.log("Responses: " + res[i]);
        }
        $state.go("robotIndex", {}, {reload: true});
      });
    };

  }

})();

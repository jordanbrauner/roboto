(function () {
  "use strict";

  angular
    .module("robots")
    .controller("RobotShowController", [
      "RobotFactory",
      "ContributionFactory",
      "$state",
      "$resource",
      "$location",
      "$anchorScroll",
      "$stateParams",
      ControllerFunction
    ]);

  function ControllerFunction(RobotFactory, ContributionFactory, $state, $resource, $location, $anchorScroll, $stateParams) {

    // Variables: Core
    var vm = this,
    contributing = false,
    campaignRunning = true,
    elBody = $("html, body");

    // Scroll events
    elBody.animate({ scrollTop: 0 }, 200);
    $(".campaign-info__btn").on("click", function() { elBody.animate({ scrollTop: $("#scroll-to-contributions").offset().top - 105}, 200); });
    vm.openContributionForm = function() { elBody.animate({ scrollTop: $(".make-a-difference").offset().top - 200}, 200); };

    // Variables: Contribution
    vm.totalPledged = 0;
    vm.totalContributors = 0;
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

    // Contribution#New
    vm.newContribution = new ContributionFactory();
    vm.createContribution = function() {
      this.newContribution.$save({ id: $stateParams.id }, function(res) {
        $state.go("robotShow", { id: $stateParams.id }, { reload: true });
      });
    };

    // Days left
    (function() {
      RobotFactory.get({ id: $stateParams.id }, function(res) {
        var created = Date.parse( new Date(res.created_at) ),
            now = Date.parse( new Date(Date.now()) ),
            daysLeft = "10",
            campaignLimit = 30,
            ONE_DAY = 24 * 60 * 60 * 1000;
        daysLeft = campaignLimit - ( Math.floor(( now - created ) / ONE_DAY));

        // Check if campaign has ended
        if (daysLeft <= 0) {
          daysLeft = 0;
          campaignRunning = false;
        }

        $("#days-left").text(daysLeft);
      });
    })();

  }

})();

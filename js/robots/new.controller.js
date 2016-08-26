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

    vm.robot = new RobotFactory();

    vm.create = function() {
      console.log("Create function called. Robot is: " + this.robot);
      this.robot.$save(function(res) {
        for (var i in res) {
          console.log("This is the response to $save: " + res[i]);
        }
        $state.go("robotIndex", {}, {reload: true});
      });
    };

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

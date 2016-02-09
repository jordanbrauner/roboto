(function() {
  "use strict";

  angular
    .module("roboto", [
      "ui.router",
      "robots"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ]);

  function RouterFunction($stateProvider, $rootScope) {

    $stateProvider
      // Welcome route

      // Robot routes
      .state("robotIndex", {
        url: "/robots",
        templateUrl: "js/robots/index.html",
        controller: "RobotIndexController",
        controllerAs: "RobotIndexViewModel"
      })
      .state("robotNew", {
        url: "/robots/new",
        templateUrl: "js/robots/new.html",
        controller: "RobotNewController",
        controllerAs: "RobotNewViewModel",
      })
      .state("robotShow", {
        url: "/robots/:id",
        templateUrl: "js/robots/show.html",
        controller: "RobotShowController",
        controllerAs: "RobotShowViewModel"
      })
      .state("robotEdit", {
        url: "/robots/:id/edit",
        templateUrl: "js/robots/edit.html",
        controller: "RobotEditController",
        controllerAs: "RobotEditViewModel"
      })

      // Contribution routes

      // User routes

      // Roboto routes
      .state("robotoAbout", {
        url: "/about",
        templateUrl: "js/roboto/about.html",
        controller: "RobotoAboutController",
        controllerAs: "RobotoAboutViewModel"
      });
  }

})();

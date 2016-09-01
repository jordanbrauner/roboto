
(function() {
  "use strict";

  angular
    .module("roboto", [
      "ui.router",
      "robots",
      "contributions"
    ])
    .config([
      "$stateProvider",
      "$urlRouterProvider",
      RouterFunction
    ]);

  function RouterFunction($stateProvider, $urlRouterProvider, $rootScope) {

    $stateProvider
      // Welcome route

      // Robot routes
      .state("robotIndex", {
        url: "/robots",
        templateUrl: "scripts/robots/index.html",
        controller: "RobotIndexController",
        controllerAs: "RobotIndexViewModel"
      })
      .state("robotNew", {
        url: "/robots/new",
        templateUrl: "scripts/robots/new.html",
        controller: "RobotNewController",
        controllerAs: "RobotNewViewModel",
      })
      .state("robotShow", {
        url: "/robots/:id",
        templateUrl: "scripts/robots/show.html",
        controller: "RobotShowController",
        controllerAs: "RobotShowViewModel"
      })
      .state("robotEdit", {
        url: "/robots/:id/edit",
        templateUrl: "scripts/robots/edit.html",
        controller: "RobotEditController",
        controllerAs: "RobotEditViewModel"
      })

      // Contribution routes

      // User routes

      // Roboto routes
      .state("robotoAbout", {
        url: "/about",
        templateUrl: "scripts/core/about.html",
        controller: "RobotoAboutController",
        controllerAs: "RobotoAboutViewModel"
      });

      $urlRouterProvider.otherwise("/robots");

  }

})();

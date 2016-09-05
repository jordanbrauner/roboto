
(function() {
  "use strict";

  angular
    .module("roboto", [
      "ui.router",
      "campaigns",
      "contributions"
    ])
    .config([
      "$stateProvider",
      "$urlRouterProvider",
      RouterFunction
    ]);

  function RouterFunction($stateProvider, $urlRouterProvider, $rootScope) {

    $stateProvider
      // Campagin routes
      .state("campaignIndex", {
        url: "/campaigns",
        templateUrl: "scripts/campaigns/index.html",
        controller: "CampaignIndexController",
        controllerAs: "CampaignIndexViewModel"
      })
      .state("campaignNew", {
        url: "/campaigns/new",
        templateUrl: "scripts/campaigns/new.html",
        controller: "CampaignNewController",
        controllerAs: "CampaignNewViewModel",
      })
      .state("campaignShow", {
        url: "/campaigns/:id",
        templateUrl: "scripts/campaigns/show.html",
        controller: "CampaignShowController",
        controllerAs: "CampaignShowViewModel"
      })
      .state("campaignEdit", {
        url: "/campaigns/:id/edit",
        templateUrl: "scripts/campaigns/edit.html",
        controller: "CampaignEditController",
        controllerAs: "CampaignEditViewModel"
      })

      // User routes

      // Roboto routes
      .state("robotoAbout", {
        url: "/about",
        templateUrl: "scripts/core/about.html",
        controller: "RobotoAboutController",
        controllerAs: "RobotoAboutViewModel"
      });

      $urlRouterProvider.otherwise("/campaigns");
  }

  ////////////////////////////////////////////////////////////////////////////
  // App
  ////////////////////////////////////////////////////////////////////////////
  var app = {

    ////////////////////////////////////////////////
    initialize: function() {
    ////////////////////////////////////////////////

    },
  };


})();

"use strict";

const routeApp = angular.module("MyRouteApp", ["ngRoute"]);

routeApp.config( ($routeProvider) => {
	$routeProvider
	.when("/hwy1", {
		templateUrl: "partials/highway1.html",
		controller: "hw1Ctrl"
	})
	.when("/hwy2", {
		templateUrl: "partials/highway2.html",
		controller: "hw2Ctrl"
	})
	.otherwise("/")
});

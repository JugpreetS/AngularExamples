

var myApp = angular.module('myApp', ['ngRoute']);
//configuration

myApp.config(function($routeProvider){

	$routeProvider

	.when('/',
	{
		templateUrl : './pageOne.html',
		controller: 'firstController'
	})
	/*
	.when('/second',
	{
		templateUrl : 'pageTwo.html',
		controller: 'firstController'
	})
	.when('/third',
	{
		templateUrl : 'pageThree.html',
		controller: 'firstController'
	})
	.otherwise({redirectTo : '/'})
	*/
});


//controllers

myApp.controller('firstController', function($scope){

	$scope.customers = [];

	function init(){
		$scope.customers = [
			{name: 'Ray', city: 'San Francisco'},
			{name: 'Smith', city: 'New York'},
			{name: 'Aman', city: 'Seattle'}
		];	
	}

	$scope.addCustomer = function(){
		$scope.customers.push({name: $scope.newCustomer.name, city : $scope.newCustomer.city});
	};


	init();

});



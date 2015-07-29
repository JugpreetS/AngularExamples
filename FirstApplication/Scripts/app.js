
var myApp = angular.module('myApp', ['ngRoute']);
//configuration

myApp.config(function($routeProvider){

	$routeProvider

	.when('/',
	{
		templateUrl : './pageOne.html',
		controller: 'firstController'
	});
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


myApp.factory('firstFactory', function($http){
	
	var firstFactory = {};
	firstFactory.customers = [];
	
	firstFactory.getCustomers = function(){
		var result = $http.get('http://www.w3schools.com/angular/customers.php');

		result.then(function(response){
			firstFactory.customers = response.records;
			console.log(firstFactory.customers);
			return firstFactory.customers;
		});
	}





	var cust = [
		{'Name' : 'Smith', 'City' : 'New York', 'Country' : 'USA'},
		{'Name' : 'Aaron', 'City' : 'San Francisco', 'Country' : 'USA'},
		{'Name' : 'Lin', 'City' : 'HK', 'Country' : 'China'},
		{'Name' : 'Ron', 'City' : 'London', 'Country' : 'UK'}
	];

	return firstFactory;

});

myApp.controller('firstController', function($scope, $http, firstFactory){

	$scope.customers = [];

	function init(){
		//$scope.customers = firstFactory.customers;
	}
	// var result = $http.get('http://www.w3schools.com/angular/customers.php');
	// result.success(function(response){
	// 	$scope.customers = response.records;
	// });
	$scope.customers = firstFactory.getCustomers();
	firstFactory.getCustomers().then(function(result){
		$scope.customers = result;
	});

	$scope.addCustomer = function(){
		$scope.customers.push({'Name': $scope.newCustomer.name, 'City' : $scope.newCustomer.city, 'Country' : $scope.newCustomer.country});
	};


	init();

});



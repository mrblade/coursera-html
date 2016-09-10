(function() {
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController);
	
	LunchCheckController.$inject=['$scope'];
	
	function LunchCheckController($scope) {
			
		$scope.values="";
		$scope.txtColor="";
		$scope.borderColor="";
		$scope.sayMsg = function () {
								
		if ($scope.values.trim() === "") {
			$scope.txtColor="red";
			$scope.borderColor="red";
			$scope.msg="Please enter data first";
		}
		
		else {
		$scope.txtColor="green";		
		$scope.borderColor="green";
		var elements =$scope.values.split(',');
	 	if(elements.length <= 3){
			$scope.msg="Enjoy!";
		}
		else {
			$scope.msg="Too much!";
		}
		}
		
	};
	
	}
	
})();
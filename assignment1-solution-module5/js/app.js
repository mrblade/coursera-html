(function() {
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController);
	
	LunchCheckController.$inject=['$scope'];
	
	function LunchCheckController($scope) {
			
		$scope.values="";
		
		$scope.sayMsg = function () {
								
		if ($scope.values.trim() === "") {
			
			$scope.msg="Please enter data first";
		}
		
		else {
		
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
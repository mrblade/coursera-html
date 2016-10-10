(function(){
	'use strict';
	angular.module('data')
	.service('MenuDataService',MenuDataServiceF);
	
	MenuDataServiceF.$inject=['$http'];
	
	function MenuDataServiceF($http) {
		var mds =this;
		mds.getAllCategories = function() {
			
			var result=$http({
				method:'GET',
				url:'https://davids-restaurant.herokuapp.com/categories.json'
				});
				
			return result;
			
		};
		
		
		mds.getItemsForCategory= function(categoryShortName){
			
			var result=$http({
				method:'GET',
				url:'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName
				});
				
			return result;
			
		};
		
	}
	
})();
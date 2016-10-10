(function(){
	
	
	'use strict';
	angular.module('MenuApp')
	.controller('categoriesctrl',categoriesctrl);
	categoriesctrl.$inject=['allcategories'];
	
	function categoriesctrl(allcategories) {
		var c =this;
		c.categories=allcategories.data;

		
	}
	
	
	
	
	
	})();
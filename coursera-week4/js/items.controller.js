(function(){
	
	
	'use strict';
	angular.module('MenuApp')
	.controller('itemsctrl',itemsctrl);
	itemsctrl.$inject=['items'];
	
	function itemsctrl(items) {
		var c =this;
		c.items=items.data.menu_items;
		

		
	}
	
	
	
	
	
	})();
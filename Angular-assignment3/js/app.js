(function(){
	'use strict';
	angular.module("NarrowItDownApp",[])
	.controller("NarrowItDownController", NarrowItDownControllerFunction)
	.service("MenuSearchService", MenuSearchServiceC)
	.directive("foundItems",foundItemsF);
	
	NarrowItDownControllerFunction.$inject = ["MenuSearchService"];
	MenuSearchServiceC.$inject=["$http"];
	
	function foundItemsF() {
		
		var ddo ={
			
			templateUrl: 'foundItem.html',
			scope: { found:'<', onRemove:'&'} 
			
			
		};
		
		return ddo;
		
	}
	
	function NarrowItDownControllerFunction(MenuSearchService)
	
	{
		var ni = this;
		ni.searchTerm = "";
		ni.found=[];
		ni.showchk =true;
		ni.remove = function(index) {
			if (ni.found.length > 0 ) {
				ni.found.splice(index,1);
				
			}
			
		};
		
		
		ni.gett  = function ()
	
		
		{
			if (ni.searchTerm !== "")
			{
				var result= MenuSearchService.getMatchedMenuItems();
				result.then(function(resp){
			//Success
			
		
			for (var i=0; i< resp.data.menu_items.length; i++){
			
				if (resp.data.menu_items[i].description.indexOf(ni.searchTerm) !== -1) {
					ni.found.push(resp.data.menu_items[i]);
					
				}
			}
			
			if (ni.found.length > 0){
				ni.showchk=true;
			}
			
			else{ ni.showchk=false;}
			
			
				},
			function(){
				
				ni.showchk=false;
				});
				
			}
			
			else {
				ni.showchk=false;
			}
			
		};
		
		
	}
	
	
	
	function MenuSearchServiceC ($http){
		var sv = this;
	
		sv.getMatchedMenuItems=function(){
			var result=$http({
				method:"GET",
				url:("https://davids-restaurant.herokuapp.com/menu_items.json")});
				
			return result;
			
			
		};
		
		
	}
	
	
	
	
	
})();
(function(){
	'use strict';
	angular.module("ShoppingListCheckOff",[])
	.controller("ToBuyShoppingController", ToBuyShoppingControllerFunction)
	.controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingControllerFunction)
	.service("ShoppingListCheckOffService", ShoppingListCheckOffServiceC);
	
	ToBuyShoppingControllerFunction.$inject = ["ShoppingListCheckOffService"];
	AlreadyBoughtShoppingControllerFunction.$inject =["ShoppingListCheckOffService"];
	
	function ToBuyShoppingControllerFunction(ShoppingListCheckOffService)
	
	{
		var tbs=this;
		tbs.itemm = ShoppingListCheckOffService.tobuy;
		tbs.move= function(indx) {
			ShoppingListCheckOffService.addtobought(indx);
		};
		
		
	}
	
	
	function AlreadyBoughtShoppingControllerFunction(ShoppingListCheckOffService)
	
	{
		var albs=this;
		albs.itemm = ShoppingListCheckOffService.bought;
		
		
	}
	
	function ShoppingListCheckOffServiceC (){
		var sl = this;
		
		sl.tobuy=[
		{ name:"Cookies", quantity:5},
		{ name:"Cake", quantity:1},
		{ name:"Pepsi", quantity:2},
		{ name:"Nutella", quantity:10},
		{ name:"Sugar", quantity:1}
		
		];
		
		sl.bought=[];
		
		sl.addtobought =function(index) {
			sl.bought.push(sl.tobuy[index]);
			sl.tobuy.splice(index,1);
			
		};
		
		
		
		
	}
	
	
	
	
	
})();
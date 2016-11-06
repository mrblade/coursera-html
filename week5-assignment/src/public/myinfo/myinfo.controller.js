(function(){
	'use strict';
	angular.module('public')
.controller('MyinfoController', iController);

iController.$inject=['MenuService'];

function iController(MenuService) {
	
	var i=this;
	i.user={
		firstname:MenuService.user.firstname,
		lastname:MenuService.user.lastname,
		email:MenuService.user.email,
		phone:MenuService.user.phone,
		fav:MenuService.user.fav,
		itmdesc:MenuService.user.itmdesc,
		img:MenuService.user.img
	};

	
}
	
	
	})();
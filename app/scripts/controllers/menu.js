'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('MenuCtrl',['foodFinder','orderManager',function (foodFinder,orderManager) {

  		var vm = this;
console.log("getting datgdfga");
  		this.items = foodFinder.getMenu().then(function(data){
  			console.log("getting data");
  			vm.items = data;
  		});

  		this.increment = function(item){
  			item.rating = ((item.rating * 10)+1)/10;
  		};
  		this.decrement = function(item){
  			item.rating = ((item.rating * 10)-1)/10;
  		};

  		this.chooseItem=function(menuCategory,menuItemName){
  			console.log("choose"+menuItemName);
  			orderManager.chooseMenuOption(menuCategory,menuItemName);
  		};

  }]);

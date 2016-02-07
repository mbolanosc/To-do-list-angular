angular.module('ControllersDetalle', ['LocalStorageModule'])

.controller('detalleCtrl', function ($scope , $routeParams, $rootScope, localStorageService, todoStorage) {

   
    $rootScope.whichItem = $routeParams.itemId;
    console.log($rootScope.whichItem);
    var key = $rootScope.whichItem;

   /*var removeItem = function(key) {
   return localStorageService.remove(key);
  }*/
	
	$rootScope.eliminarDetalles = function(key){
		$rootScope.arregloDeTareas.splice(key,1);
		todoStorage.set($scope.arregloDeTareas);
		
		console.log($rootScope.arregloDeTareas[key]);
	};
    
})
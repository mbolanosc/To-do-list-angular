angular.module('ControllersDetalle', ['LocalStorageModule'])

.controller('detalleCtrl', function ($scope , $routeParams, $rootScope, localStorageService) {

   
    $rootScope.whichItem = $routeParams.itemId;
    console.log($rootScope.whichItem);
    var key = $rootScope.whichItem;

   /*var removeItem = function(key) {
   return localStorageService.remove(key);
  }*/
	
	$rootScope.eliminarDetalles = function(){
		 /*localStorage.removeItem($rootScope.whichItem);
		localStorageService.set("tareas",$scope.arregloDeTareas);*/
		
		$rootScope.arregloDeTareas.slice($rootScope.whichItem,1);
		//$rootScope.whichItem = null; // prueba para saber su trabaja sobre le array
		
		console.log(localStorageService.get('tareas'));
	};
    
})
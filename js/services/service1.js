
var storagemodule = angular.module('Service1', [])
   storagemodule.factory("todoStorage", function() {
   
   var Storage = function (){
  	 if(localStorageService.get('tareas')){
            $scope.arregloDeTareas = localStorageService.get('tareas');
        }else{
            $scope.arregloDeTareas = [];
        }
    }//close

    
	 return {
	   storage: Storage
    }//close
 

	}
);


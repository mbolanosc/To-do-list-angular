angular.module('ControllersLista', [])

.controller('listadetareasCtrl', function ($scope , localStorageService, $rootScope, todoStorage) {

  // if(localStorageService.get('tareas')){
	  /*      $scope.arregloDeTareas = localStorageService.get('tareas');
	        $rootScope.arregloDeTareas = localStorageService.get('tareas');
	    }else{
	        $scope.arregloDeTareas = [];
	        $rootScope.arregloDeTareas = [];
	    }*/
   //$scope.arregloDeTareas = [{textoTarea: 'Comprar comida para Borona', textoDescripcion:'Ir al super a comprar comida para chihuahuas.', elementSeleccionado:false}];
  $scope.arregloDeTareas = todoStorage.storage();
    
    $scope.agregarTarea = function() {
    // var  tareaDefault={textoTarea:$scope.texttarea, textoDescripcion:$scope.textDescripcion, elementSeleccionado:false}    
        $scope.arregloDeTareas.push({
               textoTarea:$scope.texttarea,
               textoDescripcion:$scope.textDescripcion
               
            }); 
       /* $rootScope.arregloDeTareas.push({
               textoTarea:$scope.texttarea,
               textoDescripcion:$scope.textDescripcion

               
            });*/
            
            $scope.texttarea = ""; // limpiar input tarea
            $scope.textDescripcion = ""; // limpiar input descripcion
            //localStorageService.set("tareas", $scope.arregloDeTareas);
	          /*linea para probar*/
            todoStorage.set($scope.arregloDeTareas);
	    };   

    $scope.eliminarTarea = function() {
        var aListaDeTareasParaEliminar = $scope.arregloDeTareas; //array para eliminar 
        $scope.arregloDeTareas = [];
        $rootScope.arregloDeTareas = [];
        angular.forEach(aListaDeTareasParaEliminar, function(i) {
            if (!i.elementSeleccionado) $scope.arregloDeTareas.push(i); 
            if (!i.elementSeleccionado) $rootScope.arregloDeTareas.push(i); 
            //i como indice como en un for for i=0; 
        });
      // localStorageService.set("tareas",$scope.arregloDeTareas);
        todoStorage.set($scope.arregloDeTareas);
        
    };

    //console.log($scope.arregloDeTareas);
});




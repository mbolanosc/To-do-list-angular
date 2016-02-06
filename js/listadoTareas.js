
angular.module('ListaDeTareas', ['LocalStorageModule', 'DetalleTarea', 'Service1'])
    .controller('listadetareasCtrl', function ($scope , localStorageService ,todoStorage) {

     todoStorage.storage();
   
  /*LISTADO DE TAREAS*/

    $scope.agregarTarea = function() {
        $scope.arregloDeTareas.push({
               textoTarea:$scope.texttarea,
               textoDescripcion:$scope.textDescripcion
            }); 
            
            $scope.texttarea = ""; // limpiar input tarea
            $scope.textDescripcion = ""; // limpiar input descripcion
            localStorageService.set("tareas", $scope.arregloDeTareas);
        };     

    $scope.eliminarTarea = function() {
        var aListaDeTareasParaEliminar = $scope.arregloDeTareas; //array para eliminar 
        $scope.arregloDeTareas = [];
        angular.forEach(aListaDeTareasParaEliminar, function(i) {
            if (!i.elementSeleccionado) $scope.arregloDeTareas.push(i); 
            //i como indice como en un for for i=0; 
        });
        localStorageService.set("tareas",$scope.arregloDeTareas);
        
    };
});

/*DETALLE DE TAREAS: DESCRIPCION*/
angular.module('proyectoListaTarea', ['ListaDeTareas'])
	.factory('DetalleTarea',function(detalleDeTarea){
		
		
		
	})


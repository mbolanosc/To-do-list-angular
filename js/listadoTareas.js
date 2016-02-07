
angular.module('ListaDeTareas', ['LocalStorageModule', 'DetalleTarea', 'Service1'])
    .controller('listadetareasCtrl', function ($scope , localStorageService, todoStorage) {

     todoStorage.storage(); /*call localStorage service*/
   
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
        });
        localStorageService.set("tareas",$scope.arregloDeTareas);
        
    };
});

/*DETALLE DE TAREAS: DESCRIPCION*/
angular.module('proyectoListaTarea', ['ListaDeTareas'])
	.factory('DetalleTarea',function(detalleDeTarea){
})


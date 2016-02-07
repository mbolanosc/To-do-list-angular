angular.module('ControllersLista', [])
  .controller('listadetareasCtrl', function ($scope , localStorageService, $rootScope, todoStorage) {
    $rootScope.arregloDeTareas = todoStorage.storage();
    
    $scope.agregarTarea = function() {
      if($scope.toDoForm.$valid){
       $rootScope.arregloDeTareas.push({
               textoTarea:$scope.texttarea,
               textoDescripcion:$scope.textDescripcion,
               done: false
            });
            $scope.texttarea = ""; // limpiar input tarea
            $scope.textDescripcion = ""; // limpiar input descripcion
            todoStorage.set($scope.arregloDeTareas);
      }
    };
});




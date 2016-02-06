angular.module('ControllersDetalle', [])

.controller('detalleCtrl', function ($scope , $routeParams, $rootScope) {
   //$scope.arregloDeTareas = [{textoTarea: 'Comprar comida para Borona', textoDescripcion:'Ir al super a comprar comida para chihuahuas.', elementSeleccionado:false}];
    $rootScope.whichItem = $routeParams.itemId;
    console.log($rootScope.whichItem);
    /*
    Vacio Por ahora, se lo paso a Meli
    */
});
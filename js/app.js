var theApp = angular.module('ListaDeTareas', ['LocalStorageModule', 'ControllersLista', 'ControllersDetalle', 'Service1', 'ngRoute']);
theApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/list', {
		templateUrl: 'templates/list.html',
		controller: 'listadetareasCtrl'
	}).
	when('/detalles/:itemId', {
		templateUrl: 'templates/detalle.html',
		controller: 'detalleCtrl'
	}).
	otherwise({
		redirectTo :'/list'
	});
}]);









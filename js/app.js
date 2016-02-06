//localStorage.clear(); // para limpiar todo el local
var theApp = angular.module('ListaDeTareas', ['LocalStorageModule', 'ControllersLista', 'Service1', 'ngRoute']);
theApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/list', {
		templateUrl: 'templates/list.html',
		controller: 'listadetareasCtrl'
	}).
	otherwise({
		redirectTo :'/list'
	});
}]);





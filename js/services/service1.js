angular.module('Service1', ['LocalStorageModule'])
  .factory("todoStorage", function(localStorageService) {
   
   var Storage = function (){
     if(localStorageService.get('tareas')){
            return localStorageService.get('tareas');
        }else{
            return [];
        }
    };//close
    var setNew = function (arreglo){
      localStorageService.set("tareas", arreglo);
    };
    
   return {
     storage: Storage,
     set: setNew
    }//close
  }
);


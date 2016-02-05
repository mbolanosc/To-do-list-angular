angular.module('Service1', [])

.factory("MyService", function() {
  var MyName = "Mr.Bulldops";
  return {
    name: function() {
      return MyName;
    }
  };
})

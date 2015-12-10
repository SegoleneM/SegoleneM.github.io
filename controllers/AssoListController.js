angular.module('cv').controller('AssoListController', ['$http', function($http){
  var ctrl=this;
  $http.get('../data/assos.json').success(function(data){
    ctrl.assos=data.assoList;
  });
}]);
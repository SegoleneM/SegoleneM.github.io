angular.module('cv').controller('FormationListController', ['$http', function($http){
  var ctrl=this;
  $http.get('../data/formations.json').success(function(data){
    ctrl.formations=data.formationList;
  });
}]);
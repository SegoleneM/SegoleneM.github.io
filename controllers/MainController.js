angular.module('cv').controller('MainController', ['$location', function($location){
  this.menuClass = function(page) {
    var current = $location.path().substring(1);
    return page === current ? "active" : "";
  };
}]);
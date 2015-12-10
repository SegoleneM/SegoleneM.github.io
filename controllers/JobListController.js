angular.module('cv').controller('JobListController', ['$http', function($http){
  var ctrl=this;
  $http.get('../data/jobs.json').success(function(data){
    ctrl.jobs=data.jobList;
  });
}]);
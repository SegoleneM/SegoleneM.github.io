angular.module('cv').controller('ProjectListController', ['$http', function($http){
     var ctrl=this;
  $http.get('../data/projects.json').success(function(data){
    ctrl.projects=data.projectList;
  });
  }]);
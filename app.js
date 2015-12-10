(function() {
angular.module('cv', ['ngRoute'])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/jobs', {
        templateUrl: 'views/jobs.html'
    }).
     when('/projects', {
        templateUrl: 'views/projects.html'
    }).
      when('/assos', {
        templateUrl: 'views/associations.html'
    }).
       when('/formations', {
        templateUrl: 'views/formations.html'
    }).
      otherwise({
        redirectTo: '/jobs'
      });
}]);

})();
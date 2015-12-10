  angular.module('cv')
  .directive('skill', function(){
    return {
      restrict:'E',
      templateUrl:'templates/skill.html',
      controller: 'SkillsController',
      controllerAs: 'skills'
    };
  });

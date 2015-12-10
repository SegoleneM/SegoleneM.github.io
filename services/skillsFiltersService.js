angular.module('cv').factory('skillsFiltersService', function(){
  var filters = {langSpokenFilter:'',
    langSkillsFilter:[],
    technoSkillsFilter:[],
    methodSkillsFilter:[]};

	filters.toggleSpokenLang=function(lang){
		filters.langSpokenFilter= (filters.langSpokenFilter==lang.id ? "" : lang.id);
	};
 	filters.toggleLangSkills=function(langSkill){
      index=filters.langSkillsFilter.indexOf(langSkill);
      index <0 ? filters.langSkillsFilter.push(langSkill) : filters.langSkillsFilter.splice(index, 1);
    };
    filters.toggleTechnoSkills=function(skill){
      index=filters.technoSkillsFilter.indexOf(skill);
      index <0 ? filters.technoSkillsFilter.push(skill) : filters.technoSkillsFilter.splice(index, 1);
    };
    filters.toggleMethodSkills=function(skill){
      index=filters.methodSkillsFilter.indexOf(skill);
      index <0 ? filters.methodSkillsFilter.push(skill) : filters.methodSkillsFilter.splice(index, 1);
    };

    
  return filters;
});
angular.module('cv').controller('SkillsController', ['skillsFiltersService', function(skillsFiltersService){
    this.languageSkills=languageSkills;
    this.languagesSpoken=languagesSpoken;
    this.technoSkills=technoSkills;
    this.methodSkills=methodSkills;

    this.filters=skillsFiltersService;

    this.filterProExp=function(item){
      langSpokenResult=skillsFiltersService.langSpokenFilter ? (item.lang==skillsFiltersService.langSpokenFilter) : true;
      langSkillsResult=(skillsFiltersService.langSkillsFilter.length>0) ? false : true;
      for(i=0; i<item.langSkills.length; i++){
        if (skillsFiltersService.langSkillsFilter.indexOf(item.langSkills[i])>-1){
          langSkillsResult=true;
          break;
        }
      }
      technoResult=(skillsFiltersService.technoSkillsFilter.length>0) ? false : true;
      for(i=0; i<item.technoSkills.length; i++){
        if (skillsFiltersService.technoSkillsFilter.indexOf(item.technoSkills[i])>-1){
          technoResult=true;
          break;
        }
      }
      methodResult=(skillsFiltersService.methodSkillsFilter.length>0) ? false : true;
      for(i=0; i<item.methodSkills.length; i++){
        if (skillsFiltersService.methodSkillsFilter.indexOf(item.methodSkills[i])>-1){
          methodResult=true;
          break;
        }
      }
      return langSpokenResult && langSkillsResult && technoResult && methodResult;
    };

    this.langSpokenSelected=function(lang){
      return lang==skillsFiltersService.langSpokenFilter;
    };

    this.technoSkillSelected=function(techno){
      return skillsFiltersService.technoSkillsFilter.indexOf(techno)>-1;
    };

    this.langSkillSelected=function(lang){
      return skillsFiltersService.langSkillsFilter.indexOf(lang)>-1;
    };

    this.methodSkillSelected=function(method){
      return skillsFiltersService.methodSkillsFilter.indexOf(method)>-1;
    };

  }]);

var languageSkills=['Java', 'C', 'C++', 'C#', 'HTML', 'CSS', 'AngularJS', 'Javascript', 'Python', 'SQL', 'Prolog', 'XAML'];
var languagesSpoken=[{title:'Français (natif)', id:'fr'}, {title:'Anglais (courant)', id:'en'}, {title:'Espagnol (compétence professionnelle)', id:'es'}];
var technoSkills=['Linux', 'Windows Phone', 'Android', 'Git'];
var methodSkills=['UML', 'Gestion de projet', 'MVC', 'MVVM', 'Java Design Patterns', 'SOA', 'algorithmie'];
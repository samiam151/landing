var app = angular.module('app', []);

/** DIRECTIVES **/
app
.directive('workBlockHover', function(){
   return function(scope, element){
      var el = element,
         cont = $(el).children().children().children().children('.cont');
      el.addClass('blue');

      el.bind('mouseenter', function(){
         var image = $(this).data('image');
         el.css('background-image', 'url(' + image + ')');
         el.addClass('darken');
         cont.addClass('blue');
         el.addClass('toWhite');
      });

       el.bind('mouseleave', function(){
         el.css('background-image', 'none');
         el.removeClass('darken');
         cont.removeClass('blue');
         el.removeClass('toWhite');
      });


   }
})

/** CONTROLLERS **/
app
.controller('AboutCtrl', function(){
   this.skills = [
      'Javascript',
      'D3 / Angular',
      'HTML / SVG', 
      'CSS / SASS',
      'Bootstrap', 
      'jQuery / Underscore',
      'Git Version Control'
   ];

   this.newSkills = [
      'Javascript ES2015',
      'BDD / TDD with Mocha & Chai'
   ];

   this.clubs = [
      {name: 'Code For DC', url: 'http://codefordc.org/'},
      {name: 'Data Visualization DC', url: 'http://www.meetup.com/data-visualization-dc/'},
      {name: 'AngularJS DC', url: 'http://www.meetup.com/AngularJS-DC/'}
   ];
})
.controller('WorkCtrl', ['experiences', function(experiences){
   this.experiences = experiences;
}])
.controller('PieCtrl', function(){
   this.data = function(){
      return [10,20,30,40,50];
   };
})
;

/** SERVICES **/
app
.service('experiences', function(){
   this.toString = 'The name of this service is "experiences".';
   this.works = [
      {
         header: 'Interactive Bubble Chart',
         brief: 'Data Visualization',
         skills: 'HTML, SCSS, JQUERY, D3, PYTHON',
         // url: 'http://forgenerationstocome.org/#/bubble-chart',
         url: 'http://nick-sam.com/_hold/bubble',
         image: 'assets/screenshot_of_bubble_graph.png'

      },
      {
         header: 'Keyboard Piano',
         brief: 'Web Audio API Experiment',
         skills: 'HTML, SCSS, JAVASCRIPT, WEB AUDIO API',
         url: 'http://nick-sam.com/_hold/interactivePiano/',
         image: 'assets/screenshot_of_piano.png'

      },
      {
         header: 'Nova Energy',
         brief: 'Web Design from Mock-Up',
         skills: 'HTML, SCSS, BOOTSTRAP',
         url: 'http://nick-sam.com/_hold/aqua/',
         image: 'assets/screenshot_of_nova.png'

      },
      {
         header: 'Dinner List',
         brief: 'Angular Applet',
         skills: 'HTML, SCSS, JAVASCRIPT, ANGULAR',
         url: 'http://nick-sam.com/_hold/peopleList/',
         image: 'assets/screenshot_of_peoplelist.png'

      },
      {
         header: 'Legacy Portfolio Site',
         brief: 'Bootstrap / PHP Portfolio Site',
         skills: 'HTML, SCSS, JAVASCRIPT, PHP',
         url: 'http://nick-sam.com/_hold/personal/',
         image: 'assets/screenshot_of_legacy.png'

      }]; // header, brief, skills, url, image
})
;

var app = angular.module('app', []);

/** ROUTES **/
// app
// .config(function($routeProvider){
//    $routeProvider.when('/')
// })
// ;

/** DIRECTIVES **/
app
.directive('workBlockHover', function(){
   return function(scope, el){
      var originalBackgroundColor = el.css('background-color'),
         originalColor = el.css('color');
      el.bind('mouseenter', function(){
         var image = $(this).data('image');
         el.css('background-image', 'url(' + image + ')');
         el.css('color', 'black');
      });
       el.bind('mouseleave', function(){
         el.css('background-image', 'none');
         el.css('color', originalColor);
      });
   }
})
// .directive('fadeIn', function(){
//    return function(scope,el, attrs){
//       el.bind('click', function(){
//          console.log('loaded');
//       });
//    };
// })
// ;

/** CONTROLLERS **/
app
.controller('AboutCtrl', function(){
   this.skills = ['HTML / SVG', 
      'CSS / SASS / Bootstrap', 
      'Javascript',
      'D3 / Angular',
      'jQuery / Underscore',
      'Git'
   ];
   this.clubs = [
      'Code for DC',
      'Data Visualization DC',
      'AngularJS DC'
   ];
})
.controller('WorkCtrl', ['experiences', function(experiences){
   this.experiences = experiences;
}])
;

/** SERVICES **/
app
.service('experiences', function(){
   var that = this;
   this.toString = 'The name of this service is "experiences".';
   this.works = [
      {
         header: 'Interactive Bubble Chart',
         brief: 'Data Visualization',
         skills: 'HTML, SCSS, JQUERY, D3, PYTHON',
         url: 'http://forgenerationstocome.org/#/bubble-chart',
         image: 'assets/screenshot_of_bubble_graph.png'

      },
      {
         header: 'Keyboard Piano',
         brief: 'Web Audio API Experiment',
         skills: 'HTML, SCSS, JAVASCRIPT, WEB AUDIO API',
         url: 'http://nick-sam.com/interactivePiano/',
         image: 'assets/screenshot_of_piano.png'

      },
      {
         header: 'Dinner List',
         brief: 'Angular Someting',
         skills: 'HTML, SCSS, JAVASCRIPT, ANGULARJS',
         url: 'http://nick-sam.com/peopleList/',
         image: 'assets/screenshot_of_peoplelist.png'

      },
      {
         header: 'Nova Energy',
         brief: 'Web Design from Mock-Up',
         skills: 'HTML, SCSS, BOOTSTRAP',
         url: 'http://nick-sam.com/aqua/',
         image: 'assets/screenshot_of_nova_energy.png'

      }

   ]; // header, brief, skills, url, image
   this.worksLength = (function(){
      return that.works.length;
   }());
})
;
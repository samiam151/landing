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
.directive('pieChart', function(){
   return {
      restrict: 'E',
      replace: true,
      // template: '<p>Hello!!!!!!!</p>',
      // transclude: true,
      // scope: {},
      link: function(scope, el, attrs){
         var height = 100, width = 100;
         var svg = d3.select(el[0]).append('svg')
            .attr('height', height)
            .attr('width', width);

         var circle = svg.selectAll('circle')
            // need to fix data problem // pull from controller
            .data([50])
            .enter()
            .append('circle')
            .attr('r', function(d,i){
               return d;
            })
            .attr('cx', function(d,index){
               return index * 50 + d;
            })
            .attr('cy', '50')
            .style('fill', 'red');
         var innerCircle = svg.append('circle')
            .attr('r', '30')
            .attr('cy', (height / 2))
            .attr('cx', (width / 2))
            .attr('fill', 'white')
            ;
      }
   };
})
;

/** CONTROLLERS **/
app
.controller('AboutCtrl', function(){
   this.skills = [
      'HTML / SVG', 
      'CSS / SASS',
      'Bootstrap', 
      'Javascript',
      'D3 / Angular',
      'jQuery / Underscore',
      'Git',
      'Python'
   ];

   this.newSkills = [
      'ES6 with Babel',
      'React'
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

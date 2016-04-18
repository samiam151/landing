$('section').each(function(){
   var winHeight = $(window).height();
   $(this).css('height', (winHeight + (winHeight * 0.1)));
   $(this).css('display', 'absolute');
});

var app = angular.module('app', ['ui.router']);

app.controller('WorkCtrl', ['experiences', function(experiences){
   this.experiences = experiences;
}])
;


app.service('experiences', function(){
   this.toString = 'The name of this service is "experiences".';
   this.works = [
      {
         header: 'Interactive Bubble Chart',
         brief: 'Data Visualization',
         skills: 'HTML, SCSS, JQUERY, D3, PYTHON',
         url: 'http://forgenerationstocome.org/#/bubble-chart',
         image: '../assets/screenshot_of_bubble_graph.png'
      },
      {
         header: 'Interactive Piano',
         brief: 'Web Audio API Experiment',
         skills: 'HTML, SCSS, JAVASCRIPT, WEB AUDIO API',
         url: 'http://nick-sam.com/interactivePiano/',
         image: '../assets/screenshot_of_piano.png'
      },
      {
         header: 'Nova Energy',
         brief: 'Web Design from Mock-Up',
         skills: 'HTML, SCSS, BOOTSTRAP',
         url: 'http://nick-sam.com/aqua/',
         image: '../assets/screenshot_of_nova_energy.png'
      }
   ];
})
;
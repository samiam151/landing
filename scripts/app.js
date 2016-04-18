$('section').each(function(){
   var winHeight = $(window).height();
   $(this).css('height', (winHeight + (winHeight * 0.20)));
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
         skills: 'HTML, SCSS, JQUERY, D3, PYTHON',
         url: 'http://forgenerationstocome.org/#/bubble-chart'
      },
      {
         header: 'Interactive Piano',
         skills: 'HTML, SCSS, JAVASCRIPT, WEB AUDIO API',
         url: 'http://nick-sam.com/interactivePiano/'
      },
      {
         header: 'Nova Energy',
         skills: 'HTML, SCSS, BOOTSTRAP',
         url: 'http://nick-sam.com/aqua/'
      }
   ];

})
;
(function(){

    $('.home-work-a').on('click', function(){
        var loc = $('.work').position();
        $(window).scrollTop(loc.top);

    });

}());
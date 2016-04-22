(function(){

    // Make all <section>'s at least as title as the viewport
    $('section.home').each(function(){
        var winHeight = $(window).height(),
            padding = winHeight * 0.1;
        $(this).css('height', (winHeight + padding));
    });

}());
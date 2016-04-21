(function(){

    // Make all <section>'s at least as title as the viewport
    $('section').each(function(){
        if ($(this).attr('class') === 'work'){
            return;
        }

        var winHeight = $(window).height(),
            padding = winHeight * 0.1;
        $(this).css('height', (winHeight + padding));
    });

}());


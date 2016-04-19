(function(){

    // Make all <section>'s at least as title as the viewport
    $('section').each(function(){
        var winHeight = $(window).height();
        $(this).css('height', winHeight - 30);
        // $(this).css('height', (winHeight + (winHeight * 0.1)));
        $(this).css('display', 'absolute');
    });

    // Make the work blocks equidistant
    $('.work-block').each(function(index){
        $(this).css('padding', function(){
            var parent = $('.work'),
                parentHeight = parseInt($(parent).css('height'), 10),
                numberOfBlocks = 4,
                padding = ((parentHeight / numberOfBlocks) / numberOfBlocks) / 2;
            return padding + 'px 0px';
        });
    });

}());


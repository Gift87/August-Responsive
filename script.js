//toggle
$(document).ready(function(){
    $('.toggle').click(function(){
        $('.menu').toggleClass('active');
    });
});


//
// add padding top to show content behind navbar
$('body').css('padding-top', $('.navbar').outerHeight() + 'px');
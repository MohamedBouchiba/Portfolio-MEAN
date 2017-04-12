/**
 * Created by Bouchiba on 14/05/2016.
 */
$('#BarDeNavigation > ul > li > a').click(function() {
    $('li').removeClass();
    $(this).parent().css('background-color','#B5A183 !important');
    $(this).parent().addClass('active_custom');
});

var filterizd = $('.filtr-container').filterizr({
    //options object
});

$(window).scroll(function() {
    var height = $(window).scrollTop();

    var trigerCompetance =  ($(document).height() / 5) * 1.05 ;
    
    if(height  > trigerCompetance) {
        $('.progress-bar-custom').css('display','block');
    }
});
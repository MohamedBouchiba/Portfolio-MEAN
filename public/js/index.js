/**
 * Created by Bouchiba on 14/05/2016.
 */
$('#BarDeNavigation > ul > li > a').click(function() {
    $('li').removeClass();
    $(this).parent().css('background-color','#B5A183 !important');
    $(this).parent().addClass('active_custom');
});


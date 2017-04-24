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

$('#modal-content-demo').apFullscreenModal({
    openSelector: '#open-modal',
    backgroundColor: '#222',
    closeSelector: '.close-modal',
    animationDuration: 500

});

$(".input-send").click(function () {
   nom = $("#name").val();
   message = $("#message").val();
   coordonee = $("#email").val();

   alert(nom + message + coordonee)
    $.ajax({
        url : '../php/email.php',
        type : 'GET',
        data : 'nom='+nom + 'message='+message+'coordonee='+coordonee,
        dataType : 'html',
        success : function(reponse, statut){
            alert(reponse)
        },

        error : function(resultat, statut, erreur){

        }

    });
});

$(window).scroll(function() {
    var height = $(window).scrollTop();

    var trigerCompetance =  ($(document).height() / 5) * 1.05 ;
    
    if(height  > trigerCompetance) {
        $('.progress-bar-custom').css('display','block');
    }
});
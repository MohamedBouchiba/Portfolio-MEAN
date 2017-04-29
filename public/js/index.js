/**
 * Created by Bouchiba on 14/05/2016.
 */
$(document).ready(function () {
   $(".CategDevWeb").trigger("click");
   $(".ToutCateg").trigger("click");
});


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

   var visiteur = new Object();
   visiteur.nom = $("#name").val();
   visiteur.message = $("#message").val();
   visiteur.coordonee = $("#email").val();

   var visiteurJson = JSON.stringify(visiteur);

    $.ajax({
        url : 'php/email.php',
        type : 'POST',
        data : 'donnee='+visiteurJson,
        success : function(reponse, statut){
            var inst = $('[data-remodal-id=modal]').remodal();
            inst.open();
        },
        error : function(resultat, statut, erreur){
            alert("Erreur veuillez réessayer plus tard")
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
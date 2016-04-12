$(document).ready( function() {
  $('html,body').animate({scrollTop: 50},1);
  $('html,body').animate({scrollTop: 0},200);

  if ($('.an').length) { 
    $('.an').each(function(){
      $(this).addClass("hidden");      
    });
  }

}); 

$(document, window).scroll(function(){

  if ($('.an').length) { 
    $('.an').each(function(){
      var x_efecto = $(this).attr('rel');
      if ( x_efecto != null ) {
        var efecto1 = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (efecto1 < (topOfWindow+650)) {
          $(this).removeClass("hidden");
          $(this).addClass(x_efecto);
          $(this).addClass("animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass("hidden");
            $(this).removeClass($(this).attr('rel'));
            $(this).attr('rel','');
          });
        }
      }
    });
  };

});
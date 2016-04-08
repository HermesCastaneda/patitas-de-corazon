$(document).ready( function() {
  $('html,body').animate({scrollTop: 50},1);
  $('html,body').animate({scrollTop: 0},200);

  if ($('.aniIzq').length) { 
    $('.aniIzq').each(function(){
      $(this).addClass("hidden");
      $(this).attr('rel','bounceInLeft');
    });
  }

  if ($('.aniDer').length) { 
    $('.aniDer').each(function(){
      $(this).addClass("hidden");
      $(this).attr('rel','bounceInRight');
    });
  }

  if ($('.aniArriba').length) { 
    $('.aniArriba').each(function(){
      $(this).addClass("hidden");
      $(this).attr('rel','bounceInUp');
    });
  }

}); 

$(document, window).scroll(function(){

  if ($('.ani').length) { 
    $('.ani').each(function(){
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
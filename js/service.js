
/*
$(document).ready(function(){       
    var scroll_start = 0;
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > 100) {
           $(".navbar-default").css('background-color', '#000000');
        } else {
           $('.navbar-default').css('background-color', 'transparent');
        }
    });
 });
*/


  /*
  $(document).ready(function(){		
    $('#background').parallax("center", 500, 10, true);
  });
  */
  

$(function () {

  var width = Math.trunc($(window).width() / 4);
  var height = Math.trunc(width * 2 / 3);
  $('.ih-item.square').css({width: width, height: height});

  $(window).resize(function(){
    var width = Math.trunc($(window).width() / 4);
    var height = Math.trunc(width * 2 / 3);
    $('.ih-item.square').css({width: width, height: height});
  });

});


$(function() {
  $(document).ready(function() {
    // var mySwiper = new Swiper ('.swiper-container', {
    //   // Optional parameters
    //   direction: 'horizontal',
    //   loop: true,
    //   centeredSlides: true,
    //   effect: 'fade',
    //   mousewheel: false,
    //   autoHeight: true,
    //   watchOverflow: true,
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false
    //   },

    //   // If we need pagination
    //   pagination: {
    //     el: '.swiper-pagination',
    //     // type: 'fraction',
    //   },

    //   // Navigation arrows
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },

    //   // And if we need scrollbar
    //   // scrollbar: {
    //   //   el: '.swiper-scrollbar',
    //   // },
    // });

    var swiper = new Swiper({
      el: '.swiper-container',
      slidesPerView: 1,
      centeredSlides: true,
      slideToClickedSlide: true,
      grabCursor: true,
      autoHeight: true,
      effect: 'fade',
      mousewheel: {
          enabled: false,
      },
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });


    //$(".ih-item.square.effect.top_to_bottom").css({'transform-style': 'preserve-3d'});
    // $(".ih-item.square.effect.top_to_bottom").tilt({
    //   scale: 1.2
    // });
    // $(".ih-item.square.effect.top_to_bottom").panr({
    //   sensitivity: 30,
    //   scale: true,
    //   scaleOnHover: true,
    //   scaleTo: 1.2,
    //   scaleDuration: .2,
    //   panY: true,
    //   panX: true,
    //   panDuration: .01,
    //   resetPanOnMouseLeave: true,
    //   onEnter: function(){},
    //   onLeave: function(){}
    // });


  });
});

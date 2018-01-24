
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

 $(function () {
    $('#main').scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > 5);
    });
  });

  /*
  $(document).ready(function(){		
    $('#background').parallax("center", 500, 10, true);
  });
  */
  
$(function () {

  // var decalage = $('#main').scrollTop();
  // var tailleSlider = $('#news').offset().top + $('#header').height();
  // console.log(tailleSlider);
  // $('#background').css({height: tailleSlider});

  // var position =  $('#news').offset().top - 120 / 2;
  // $('.scroll').css({ top: position-decalage/10 });

  // $('#background').css({'position': 'absolute'});

  $('#main').scroll(function (eventObject) {
    // var $background = $("#background");
    var decalage = $(this).scrollTop();
    $('#background .swiper-wrapper').css({ 'top': +decalage/2});
    // var position =  $('#news').offset().top - 120 / 2;
    // $('.scroll').css({ top: position-decalage/10 });
  });
});

$(function () {
  
  // $('#news').css({'margin-top': $(window).height() - 120 - 120});

  // $('#background.emplois').css({height: auto, width: $(window).width()});

  // $('#background.home').css({height: $(window).height() - 60});
  // $('#wrapper.home').css({top: $('#background.home').height()});

  // $('#news').css({'margin-top': $('#background').height() - 121 });

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
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      centeredSlides: false,
      effect: 'fade',
      mousewheel: false,
      autoHeight: false,
      watchOverflow: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        // type: 'fraction',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
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

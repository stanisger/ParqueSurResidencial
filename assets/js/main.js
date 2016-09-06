//WOW
// new WOW().init();
// animateMenu
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".clearHeader").addClass("shadowHeader");
    } else {
        $(".clearHeader").removeClass("shadowHeader");
    }

    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".clearNav").addClass("shadowNav");
    } else {
        $(".clearNav").removeClass("shadowNav");
    }

    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".clearOl").addClass("showOl");
    } else {
        $(".clearOl").removeClass("showOl");
    }
});



//video HTML5
function play() {
  var video = document.getElementById("video-parque-sur");
  if (video.paused) {
    video.currentTime = 0;
    video.play();
  } else {
    video.pause();
  }
}  

//Formulario de contacto
$('form#form-contact').on('submit', function(event) {
  event.preventDefault();
  var data_form = $(this).serialize();
  $.ajax({
    url: 'phpmailer/send.php',
    type: 'POST',
    dataType: 'json',
    data: $(this).serialize(),
  })
  .always(function(response) {
    alert(response.message);
    if(response.statusText = true){
      window.location = 'index.html';
    }
  });
});


$(document).ready(function(){
      new WOW().init();
  //PAGE SCROL
  $('a.page-scroll').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: ($($anchor.attr('href')).offset().top -60)
          }, 1350);
          event.preventDefault();
    });

  //ACTIVE
   var sections = $('section')
      , nav = $('nav')
      , nav_height = nav.outerHeight();
 
    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();
 
      sections.each(function() {
      var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');
 
        $(this).addClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
      
      });
      });

  // TABS
  $('ul.tabs').tabs();


  // SLIDE
  $('.slider').slider({full_width: true});

  //CARRUSEL
  $('.carousel.carousel-slider').carousel({full_width: true});
  //IMG BOXED
  $('.materialboxed').materialbox();

  //MODAL
  $('.modal-trigger').leanModal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .8, // Opacity of modal background
    in_duration: 500, // Transition in duration
    out_duration: 500, // Transition out duration
    starting_top: '70%', // Starting top style attribute
    ending_top: '0', // Ending top style attribute
    complete: function(){
      play();
    }
  });

  // MENU
  $(".button-collapse").sideNav();

});
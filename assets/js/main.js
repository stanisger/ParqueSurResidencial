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
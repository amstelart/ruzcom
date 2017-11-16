$(document).ready(function(){

  $("#main-slider").owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    autoHeight:true,
    // animateOut: 'fadeOut',
    loop: true,
    center: true
  });
  $('#main-slider-next').on('click', function(e){
  e.preventDefault();
  $('#main-slider').trigger('next.owl.carousel');
  });
  $('#main-slider-prev').on('click', function(e){
    e.preventDefault();
    $('#main-slider').trigger('prev.owl.carousel');
  });

});

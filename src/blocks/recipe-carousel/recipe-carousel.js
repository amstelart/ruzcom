$(document).ready(function(){

  $("#recipe-carousel").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    // margin: 30,
    responsive : {
      0 : {
        items: 1,
        nav: true,
        loop: true,
        center: true,
      },
      480 : {
        items: 1,
      },
      768 : {
        items: 2,
      }
      // 992 : {
      //   items: 2,
      // },
      // 1200 : {
      //   items: 2,
      // },
      // 1800 : {
      //   items: 2,
      // }
    }
  });

});

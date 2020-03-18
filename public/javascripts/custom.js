$(document).ready(function() {
$('.navbar-toggler').click(function() {
    $('.navbar-collapse').slideToggle();
   });

  $("#owl-demo").owlCarousel({
 	  navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      items : 1,
      loop: true,
      autoPlay: 3000,
      autoplayTimeout:1000,
      autoplayHoverPause:true
  });
  $("#testimonal").owlCarousel({ 
  		navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      items : 1,
      loop: true,
      autoPlay: 3000,
      autoplayTimeout:1000,
      autoplayHoverPause:true
  });
});




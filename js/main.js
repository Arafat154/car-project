/*----------ripple initialization----*/
$(function() { $(".ripple-btn, .nav-item").rippleEffect() });

/*--------beerslider initialization------*/
var slider = new BeerSlider( document.getElementById( "beer-slider" ) );

/*--------mixitup initialization----------*/
var mixer = mixitup('.content');

/*-------------owl carousel----------------*/
$('.owl-carousel').owlCarousel({
   loop: true,
   margin: 10,
   nav: false,
   dots: false,
   animateIn: 'animate__bounceInRight',
   autoplay: true,
   autoplayTimeout: 3000,
   autoplayHoverPause: true,
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 1
      },
      1000: {
         items: 1
      }
   }
})
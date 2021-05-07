$(document).ready(function() {
   /*----------ripple initialization----*/
   $(function() { $(".ripple-btn, .nav-item").rippleEffect() });

   /*--------beerslider initialization------*/
   var slider = new BeerSlider(document.getElementById("beer-slider"));

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
   });

   /*---------------audio start---------------*/
   $(".start-engine").on("click", function(e) {
      var sound = document.getElementById("audio");
      sound.play();
      $('.engine-image').addClass("start-humming");
      setTimeout(function() {
         $('.engine-image').removeClass("start-humming")
      }, 2500);
   });


   // Example starter JavaScript for disabling form submissions if there are invalid fields
   (function() {
      'use strict'

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
         .forEach(function(form) {
            form.addEventListener('submit', function(event) {
               if (!form.checkValidity()) {
                  event.preventDefault()
                  event.stopPropagation()
               }

               form.classList.add('was-validated')
            }, false)
         })
   })();
});
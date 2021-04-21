$(document).ready(function() {
   var fixHeight = function() {
      $('.navbar-nav').css(
         'max-height',
         document.documentElement.clientHeight - 150
      );
   };
   fixHeight();
   $(window).resize(function() {
      fixHeight();
   });
   $('.navbar .navbar-toggler').on('click', function() {
      fixHeight();
   });
   $('.navbar-toggler, .overlay').on('click', function() {
      $('.mobileMenu, .overlay').toggleClass('open');
   });
});

/*$(".navbar-toggler").click(function() {
   if ($(".navbar-toggler").hasClass("collapsed")) {
      $(".collapse-bg").css({
         display: 'none'
      });
   } else {
      $(".collapse-bg").css({
         display: 'block'
      });
   }
});

// click the overlay to hide the drawer
$(".collapse-bg").click(function() {
   $(".navbar-toggler").removeClass("collapsed");
   $(".navbar-collapse").removeClass("show");
   $(".collapse-bg").css({
      display: 'none'
   });
});*/
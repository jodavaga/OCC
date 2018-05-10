
$(document).ready(function() {
    (function($) {
    console.log("OCC working");

    // Handle minimalize sidebar menu
    $(".hide-menu").click(function(event) {
        event.preventDefault();
        if ($(window).width() < 769) {
          $("body").toggleClass("show-sidebar");
        } else {
          $("body").toggleClass("hide-sidebar");
        }
      });

      
    })(jQuery);
});

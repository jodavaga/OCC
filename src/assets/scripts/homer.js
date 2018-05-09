/**
 * HOMER - Responsive Admin Theme
 * version 1.8
 *
 */
$(document).ready(function () {
    console.log("HOLLLLLAAAAA");

  // Handle minimalize sidebar menu
  $('.hide-menu').click(function(event){
    event.preventDefault();
    if ($(window).width() < 769) {
        $("body").toggleClass("show-sidebar");
    } else {
        $("body").toggleClass("hide-sidebar");
    }
});

});

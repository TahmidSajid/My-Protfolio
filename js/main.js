(function ($) {
  "use strict";

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
    $(".profile_img").toggleClass("active_img");
    $("#user_details").toggleClass("d-none");
    $("#user_accounts").toggleClass("d-none");
    // $("#user_name").toggleClass("user_name");
    // $("#user_email").toggleClass("user_email");
    // $("#user_intro").toggleClass("user_intro");
  });
})(jQuery);

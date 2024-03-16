(function ($) {
  "use strict";

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
    
  };
  fullHeight();
  // $(window).load(function() {
  //     if($(window).width()<=922){
  //       $("#sidebar").addClass("active")
  //       // $("#content").addClass("sidebar_active");
  //       // $("#content").addClass("sidebar_inactive");
  //       $(".profile_img").addClass("active_img");
  //       $("#user_details").addClass("d-none");
  //       $("#user_accounts").addClass("d-none");
  //     }
  //   })
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
    $("#content").toggleClass("sidebar_active");
    $("#content").toggleClass("sidebar_inactive");
    $(".profile_img").toggleClass("active_img");
    $("#user_details").toggleClass("d-none");
    $("#user_accounts").toggleClass("d-none");
    // $("#user_name").toggleClass("user_name");
    // $("#user_email").toggleClass("user_email");
    // $("#user_intro").toggleClass("user_intro");
  });
})(jQuery);

// let navBar = document.querySelector('#sidebar');
// console.log(window.innerWidth);
// window.addEventListener('load',()=>{
//   if(window.innerWidth<922){
//     navBar.classList.add("active");
//   }
// })
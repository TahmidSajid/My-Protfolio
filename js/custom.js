let aside_bar = document.querySelectorAll(".nav-bg")[0];
aside_bar.setAttribute("style", `height:${window.innerHeight}px`);
window.addEventListener('resize',()=>{
  aside_bar.setAttribute("style", `height:${window.innerHeight}px`);
})

let navBar = document.querySelector('#sidebar');
let mainContent = document.querySelector('#content');
let profileImg = document.querySelector('.profile_img');
let userDetails = document.querySelector('#user_details');
let userAccounts = document.querySelector('#user_accounts');
console.log(window.innerWidth);
window.addEventListener('load',()=>{
  if(window.innerWidth <= 1000){
    navBar.classList.add("active");
    mainContent.classList.add("sidebar_active");
    profileImg.classList.add("active_img");
    userDetails.classList.add("d-none");
    userAccounts.classList.add("d-none");
  }
})

// let barBtn = document.querySelectorAll("#sidebarCollapse")[0];
// let contentBody = document.querySelectorAll(".content_body")[0];
// let navBg = document.querySelectorAll(".nav-bg")[0];
// let navWidth = navBg.offsetWidth;
// contentBody.setAttribute("style", `padding-left:${navWidth}px`);
// barBtn.addEventListener("click", function(){
//   let contentBody = document.querySelectorAll(".content_body")[0];
//   let navBg = document.querySelectorAll(".nav-bg")[0];
//   let navWidth = navBg.offsetWidth;
//   contentBody.setAttribute("style", `padding-left:${navWidth}px`);
// });

let btn_p = document.querySelectorAll(".btn_cross")[0];

let btn_first = btn_p.firstElementChild;

let cross_l = btn_first.firstElementChild;
let cross_m = cross_l.nextElementSibling;
let cross_r = cross_m.nextElementSibling;

btn_first.addEventListener("click", () => {
  cross_m.classList.toggle("d-none");
  cross_l.classList.toggle("btn_l_cross");
  cross_l.classList.toggle("mb-1");
  cross_r.classList.toggle("mb-1");
  cross_r.classList.toggle("btn_r_cross");
});

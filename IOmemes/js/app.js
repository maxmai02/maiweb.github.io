"use strict"
// 

const toggleBtn = document.querySelector(".cart-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const navbarTool = document.querySelector('.navbar-tool');
const navbarToolHeartsCountContainer = navbarTool.querySelector('.fa-heart + .text-gray');

const iconClasses = {
    active: 'fas',
    inactive: 'far',
};

function ToggleHeart(target) {
    const { active, inactive } = iconClasses;

    // Toggle icon state
    const classes =  target.classList.contains(active)
        ? [active, inactive]
        : [inactive, active];

    target.classList.replace(...classes);

    // Set active hearts count
    const heartsCount = document.querySelectorAll(`.${active}.fa-heart`).length
    navbarToolHeartsCountContainer.innerHTML = `(${heartsCount})`;
}


// function openCart() {
//     sidebar.style.transform = 'translate(0)';
// }
      
// function closeCart() {
//     sidebar.style.transform = '';
// }

// closeBtn.onclick=closeCart;
// toggleBtn.onclick=openCart;
// ==============================
// toggleBtn.addEventListener("click", function () {
//   // if (sidebar.classList.contains("show-sidebar")) {
//   //   sidebar.classList.remove("show-sidebar");
//   // } else {
//   //   sidebar.classList.add("show-sidebar");
//   // }
// });

// closeBtn.addEventListener("click", function () {
//   sidebar.classList.remove("show-sidebar");
// });

// ==============================
// toggleBtn.addEventListener("click", function () {
//   sidebar.classList.toggle("show-sidebar");
// });

// closeBtn.addEventListener("click", function () {
//   sidebar.classList.remove("show-sidebar");
// });
// ==============================
// (function(){
//     toggleBtn.addEventListener("click", function () {
//         sidebar.classList.toggle("show-sidebar");
//     });

//     closeBtn.addEventListener("click", function () {
//         sidebar.classList.remove("show-sidebar");
//     });
// })();
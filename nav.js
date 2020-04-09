"use strict";
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("tglBtn").addEventListener("click", function () {
    let nav = document.getElementById("navigation");

    if (!nav.classList.contains("activate-mb")) {
      nav.classList.add("activate-mb");
    } else {
      nav.classList.remove("activate-mb");
    }
  });

  let navLi = document.getElementsByClassName("nav-li");

  for (let i = 0; i < navLi.length; i++) {
    if (navLi[i].childNodes.length > 1) {
      let icon = document.createElement("i");
      icon.className = "fas fa-chevron-down";
      navLi[i].insertBefore(icon, navLi[i].childNodes[2]);
    }
    navLi[i].addEventListener("click", function () {
      for (let g = 0; g < navLi[i].childNodes.length; g++) {
        if (navLi[i].childNodes[g].tagName == "UL") {
          if (!navLi[i].childNodes[g].classList.contains("drop-down-list-active")) {
            navLi[i].childNodes[g].classList.add("drop-down-list-active");
            // navLi[i].childNodes[2].className = "fas fa-chevron-down";
          } else {
            navLi[i].childNodes[g].classList.remove("drop-down-list-active");
          }
        }

        if (navLi[i].childNodes[g].tagName == "svg") {
          if (navLi[i].childNodes[g].classList.contains("fa-chevron-down")) {
            navLi[i].childNodes[g].classList = "fas fa-chevron-up";
          } else {
            navLi[i].childNodes[g].classList = "fas fa-chevron-down";
          }
        }
      }
    });
  }
});

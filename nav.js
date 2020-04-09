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
    navLi[i].addEventListener("click", function () {
      for (let g = 0; g < navLi[i].childNodes.length; g++) {
        if (navLi[i].childNodes[g].tagName == "UL") {
          if (!navLi[i].childNodes[g].classList.contains("drop-down-list-active")) {
            navLi[i].childNodes[g].classList.add("drop-down-list-active");
          } else {
            navLi[i].childNodes[g].classList.remove("drop-down-list-active");
          }
        }
      }
    });
  }
});

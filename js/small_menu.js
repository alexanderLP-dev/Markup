"use strict";

let menuOpen = document.querySelector(".small_menu");

menuOpen.addEventListener("click", function(event) {
  event.preventDefault();
  let target = event.target;
  if (!target.hasAttribute("data-menuBtn")) return;

  let menu = document.querySelector("#menu");
  if (menu.hasAttribute("class", "hidden")) {
    menu.removeAttribute("class", "hidden");
  } else {
    menu.setAttribute("class", "hidden");
  }
});

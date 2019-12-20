"use strict";

let openModal = document.querySelector(".user-btn");
let closeModal = document.querySelector(".btn-close");
let closeForm = document.querySelector(".close-form");
let modalUser = document.querySelector(".modal-window-user");
let modalForm = document.querySelector(".modal-form");
let openModalForm = document.querySelector(".open-modal-form");

openModal.addEventListener("click", function(event) {
  event.preventDefault();
  modalUser.removeAttribute("hidden", "");
});

closeModal.addEventListener("click", function(event) {
  event.preventDefault();
  modalUser.setAttribute("hidden", "");
});

closeForm.addEventListener("click", function(event) {
  event.preventDefault();
  modalForm.setAttribute("hidden", "");
});

openModalForm.addEventListener("click", function(event) {
  event.preventDefault();
  modalForm.removeAttribute("hidden", "");
});

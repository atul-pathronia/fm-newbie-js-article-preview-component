"use strict";

const btns = document.querySelectorAll(".share-btn");
const container = document.querySelector(".right-container-share");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    container.classList.toggle("hidden");
  });
});

"use strict";

const toggleButton = document.getElementById("toggle-button");
const naviList = document.getElementById("navi-list");

toggleButton.addEventListener("click", () => {
  naviList.classList.toggle("active");
});

const button = document.querySelectorAll("button");
const modal_box = document.querySelector(".modal_box");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tujuan = btn.getAttribute("ini");
    document.querySelector(tujuan).classList.toggle("active_modal");
    // document.querySelector("body").classList.toggle("stopScroll");
  });
});

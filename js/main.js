"use strict";

window.addEventListener("load", () => {
  const box = document.querySelector(".container");
  const content = document.querySelector(".content");
  const body = document.querySelector("body");
  const burger = document.querySelector(".menu__burger");
  const navbar = document.querySelector(".navbar");
  const menuClose = document.querySelector(".menu__close");
  const buttons = document.querySelectorAll(".btn"); // 🔹 barcha btn tugmalar

  function logSizes() {
    if (!box || !content) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    console.clear();
    console.log("Ekran:", width, "x", height);
    console.log("body", body.clientWidth, "px");
    console.log("Container kengligi:", box.clientWidth, "px");
    console.log("Content kengligi:", content.clientWidth, "px");
  }

  burger.addEventListener("click", () => {
    navbar.style.display = "block";
    burger.style.display = "none";
    menuClose.style.display = "block";
  });

  menuClose.addEventListener("click", () => {
    menuClose.style.display = "none";
    burger.style.display = "block";
    navbar.style.display = "none";
  });

  // 🔹 Barcha tugmalarga event biriktiramiz
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Backend - is not ready yet. Backend hali tayyor emas");
    });
  });

  logSizes();
  window.addEventListener("resize", logSizes);
});

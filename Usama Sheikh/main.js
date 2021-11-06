const burger = document.querySelector(".burger-menu");
const navbar = document.querySelector(".nav-menu");
const main = document.querySelector(".main");

function toggleMenu() {
  navbar.classList.toggle("nav-active");
  main.classList.toggle("hidden");
}

burger.addEventListener("click", toggleMenu);

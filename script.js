const hamburger = document.querySelector(".header__icon-hamburger");
const close = document.querySelector(".header__icon-closing");

const navBar = document.querySelector(".header__nav");
hamburger.addEventListener("click", () => {
  navBar.classList.toggle("toggle--class");
});

close.addEventListener("click", () => {
  navBar.classList.toggle("toggle--class");
});

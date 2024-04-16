const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");

// show menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});

// Navigation Toggle
const navMenu = document.getElementById("nav-menu");
const toggleBtn = document.querySelector(".nav__btns");

toggleBtn.addEventListener("click", () => {
  if (navMenu.className == 'nav__menu') {
    navMenu.classList.add('nav__menu--toggle');
  } else {
    navMenu.classList.remove('nav__menu--toggle');
  }
});
// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");
hamburger.addEventListener("click", () => navbarNav.classList.toggle("active"));

// Klik di luar sidebar untuk menghilangkan nav
document.addEventListener("click", (e) => {
  if (![hamburger, navbarNav].some((elem) => elem.contains(e.target))) {
    navbarNav.classList.remove("active");
  }
});

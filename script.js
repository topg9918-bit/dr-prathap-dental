const menu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

menu.addEventListener("click", function() {
  navList.classList.toggle("active");
});
const searchIcon = document.getElementById("search-icon");
const search = document.querySelector(".search");
const menuIcon = document.querySelector(".menu");

searchIcon.addEventListener("click", () => {
  if (window.innerWidth < 840) {
    search.classList.toggle("display-none");
    menuIcon.classList.toggle("menu-top");
  } else {
  }
});

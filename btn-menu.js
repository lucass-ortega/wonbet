const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => {
  sideMenu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("open");
});

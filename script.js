const hamBurger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");

hamBurger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

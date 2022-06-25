let btnh = document.querySelector(".hero--btn");
btnh.type = "submit";
btnh.name = "formBtn";
btnh.addEventListener("click", function () {
  alert("japs");
});

const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__ul");

hamBurger.addEventListener("click", function () {
  hamBurger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav__a").forEach((n) =>
  n.addEventListener("click", () => {
    hamBurger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

window.addEventListener("mouseup", function (event) {
  const navMenu = document.querySelector(".nav__ul");
  if (event.target != navMenu) {
    navMenu.classList.remove("active");
    hamBurger.classList.remove("active");
  }
});


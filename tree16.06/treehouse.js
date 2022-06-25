let btnh = document.querySelector(".hero--btn");
btnh.type = "submit";
btnh.name = "formBtn";
btnh.addEventListener("click", function () {
  alert("japs");
});

const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__ul--vertical");


hamBurger.addEventListener("click", function () {
  hamBurger.classList.toggle("active");
  navMenu.classList.toggle("nav__ul--vertical--active");
});

document.querySelectorAll(".nav__a").forEach((n) =>
  n.addEventListener("click", () => {
    hamBurger.classList.remove("active");
    navMenu.classList.remove("nav__ul--vertical--active");
  })
);

window.addEventListener("mouseup", function (event) {
  const navMenu = document.querySelector(".nav__ul--vertical");
  if (event.target != navMenu) {
    navMenu.classList.remove("nav__ul--vertical--active");
    hamBurger.classList.remove("active");
  }
});

const mediaQuery = window.matchMedia('max-width: 34em');
let i = 0;
const images = [];
const time = 1000;

// image list
const slideList = [{
  img:"logos/cuts.jpg"
},
{
  img:"logos/micro.jpg"
},
{
  img:"logos/projekt-phothopea.jpg"
},
{
  img:"logos/worldpress.jpg"
}];


const image = document.querySelector("img.slide1");
const tab = [];

const timE = 3000;
let active = 0;

const changeSlide = () =>{
  active++;
if(active === slideList.length){
  active = 0;
}
  image.src = slideList[active].img;
}
setInterval(changeSlide,time)


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const Projekter1 = document.querySelector(".projekter_1");
const textContainer = document.getElementById("textContainer");
const hoverImage = document.getElementById("hoverImage");

/*burgermenu*/

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const textContainer = document.getElementById("textContainer");
  const hoverImage = document.getElementById("hoverImage");

  textContainer.addEventListener("mouseover", () => {
    hoverImage.style.display = "block";
  });

  Projekter1.classList.add("puls_img");

  textContainer.addEventListener("mouseout", () => {
    hoverImage.style.display = "none";
  });
});

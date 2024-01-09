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

Projekter1.classList.add("puls_img");

document.addEventListener("DOMContentLoaded", function () {
  const textContainer = document.getElementById("textContainer");
  const hoverImage = document.getElementById("hoverImage");

  if (textContainer && hoverImage) {
    // Tjek om elementerne findes, før du tilføjer event listeners
    textContainer.addEventListener("mouseover", () => {
      hoverImage.style.display = "block";
    });

    textContainer.addEventListener("mouseout", () => {
      hoverImage.style.display = "none";
    });
  }
});

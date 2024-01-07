const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const galleriTitel = document.querySelector(".galleri_title");
const imgGalleri = document.querySelector(".billede_galleri");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

galleriTitel.addEventListener("mouseover", function () {
  imgGalleri.style.display = "block";
});

galleriTitel.addEventListener("mouseout", function () {
  imgGalleri.style.display = "none";
});

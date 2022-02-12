const slidetItems = document.querySelectorAll(".slider-item");
const arrows = document.querySelectorAll(".arrow-cont");

arrows.forEach((arrow) => {
  arrow.addEventListener("click", function () {
    slidetItems.forEach((item) => {
      console.log("hidden");
      item.classList.toggle("hidden");
    });
  });
});

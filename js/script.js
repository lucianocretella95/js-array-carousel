let slides = document.getElementsByClassName("slide");
let nSlides = slides.length;
let selected = 0;
document.getElementById("btnNext").addEventListener("click", function () {
  slides[selected].classList.remove("active");
  if (selected < nSlides - 1) {
    selected++;
  } else {
    selected = 0;
  }
  slides[selected].classList.add("active");
  console.log("aggiungi", selected);
});

document.getElementById("btnPrev").addEventListener("click", function () {
  slides[selected].classList.remove("active");
  if ((selected == 0)) {
    selected = 4;
  } else {
    selected--;
  }
  slides[selected].classList.add("active");
  console.log("aggiungi", selected);
});

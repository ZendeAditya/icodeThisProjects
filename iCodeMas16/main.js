let divs = document.querySelectorAll(".flex > div");
let left = document.getElementById("left");
let right = document.getElementById("right");
let currentIndex = 0;

right.addEventListener("click", function () {
  divs[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % divs.length;
  divs[currentIndex].classList.add("active");
});

left.addEventListener("click", function () {
  divs[currentIndex].classList.remove("active");
  currentIndex = (currentIndex - 1 + divs.length) % divs.length;
  divs[currentIndex].classList.add("active");
});

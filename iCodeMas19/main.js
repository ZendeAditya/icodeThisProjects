let btn = document.getElementById("btn");
let modal = document.getElementById("modal");

btn.addEventListener("click", function () {
  modal.classList.toggle("-translate-y-0");
  setTimeout(() => {
    modal.classList.toggle("hidden");
  }, 1500);
});

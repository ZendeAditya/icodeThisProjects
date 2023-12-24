let box = document.getElementById("box");
document.addEventListener("DOMContentLoaded", (event) => {
  box.classList.toggle("-translate-y-0");
  document.getElementById("ok").addEventListener("click", function () {
    box.classList.toggle("hidden");
  });
});


let sendMsg = document.getElementById("sendMsg");
let toggleBox = document.getElementById("toggleBox");
let inputBox = document.querySelector("input");
let assBox = document.getElementById("assBox");
toggleBox.addEventListener("click", function () {
    assBox.classList.toggle("hidden");
});
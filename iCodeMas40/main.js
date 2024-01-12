
let btn = document.querySelectorAll(".btn");
let pageOne = document.getElementById("Page1");
let pageTwo = document.getElementById("Page2");
let pageThree = document.getElementsByTagName("Page3");

let selectBtn = document.querySelectorAll(".selectBtn");
btn.forEach((b) => {
    b.addEventListener("click", function () {
        pageOne.classList.add("-translate-x-[40rem]");
        pageOne.innerHTML = "";
    })
})
selectBtn.forEach((b) => {
    b.addEventListener("click", function () {
        pageTwo.classList.add("-translate-x-[40rem]");
        pageTwo.innerHTML = "";
    })
});

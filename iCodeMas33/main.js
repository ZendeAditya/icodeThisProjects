document.addEventListener("DOMContentLoaded", (event) => {

  let navItems = document.getElementById("navItems");
  let btn = document.getElementById("btn");
  let li = document.querySelectorAll("li");
  
      li.forEach((list, index) => {
          setTimeout(() => {
              list.classList.toggle("opacity-80");
          }, index * 300); 
      });
  btn.addEventListener("click", function () {
      navItems.classList.toggle("translate-x-0")
  })
  
  });
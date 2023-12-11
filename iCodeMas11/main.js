let num = document.querySelectorAll("button");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let price = document.getElementById("price");

let priceArray = [];
num.forEach((num) => {
  priceArray.push(num.innerText);
});

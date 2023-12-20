let productsArray = [
  { imageUrl: "https://icodethis.com/images/iCodeMas/tree.png", name: "Christmas Tree", price: 15.99 },
  { imageUrl: "https://icodethis.com/images/iCodeMas/gift.png", name: "Gift Box", price: 12.50 },
  { imageUrl: "https://icodethis.com/images/iCodeMas/gingerbread_cookie.png", name: "Gingerbread Cookie", price: 3.99 },
  { imageUrl: "https://icodethis.com/images/iCodeMas/snowflake.png", name: "Snowflake Ornament", price: 8.99 },
  { imageUrl: "https://icodethis.com/images/iCodeMas/star_cookie.png", name: "Star Cookie", price: 4.50 },
  { imageUrl: "https://icodethis.com/images/iCodeMas/santa_hat.png", name: "Santa Hat", price: 9.99 },
  { imageUrl: "https://icodethis.com/images/iCodeMas/candy_cane.png", name: "Candy Cane", price: 1.99 },
  { imageUrl: "https://icodethis.com/images/iCodeMas/snowman_deco.png", name: "Snowman Decoration", price: 12.99 },
  { imageUrl: "https://icodethis.com/images/iCodeMas/christmas_ball.png", name: "Christmas Ball Ornament", price: 6.99 },
  { imageUrl: "https://icodethis.com/images/iCodeMas/christmas_sock.png", name: "Christmas Sock", price: 5.50 },
  { imageUrl: "https://icodethis.com/images/iCodeMas/red_ribbon.png", name: "Red Ribbon", price: 2.50 },
  { imageUrl: "https://icodethis.com/images/iCodeMas/tree_cookie.png", name: "Tree Cookie", price: 4.99 }
];


let productSection = document.getElementById("productSection");

const addToCart = (btn) => {
  btn.forEach((btns) => {
      btns.addEventListener('click', function () {
          alert(`added in cart `);
      })
  })
}
const appendProduct = () => {
  let divEle = document.createElement("div");
  productsArray.forEach((product, id) => {
      divEle.innerHTML += `
      <div  class="p-4">
         <div class="p-5">
          <img src=${product.imageUrl} alt=${product.name}/>
           <button id="btn" class="-z-2 px-4 rounded-full bg-blue-300 hover:shadow-md m-2">Add to cart</button>
          <h2 class="font-semibold ">${product.name}</h2>
          <p class="">${product.price}</p>
         </div>
      </div>
      `;
      divEle.classList = `flex items-center justify-evenly flex-wrap gap-4 [&_div>img]:border-2 [&_div]:border-gray-300 [&_div]:py-2 [&_div]:px-2 [&_div]:w-40 [&_div]:h-52 [&_div>img]:w-40 [&_div>img]:h-40 [&_div>img]:p-2 [&_div]:p-2 [&_div>img]: [&_div]:cursor-pointer [&_div>img]:product [&_div]:aspect-square [&>*:nth-child(1)]:before:content-["new"] [&>*:nth-child(1)]:before:absolute [&>*:nth-child(1)]:before:px-2 [&>*:nth-child(1)]:before:bg-red-200 [&>*:nth-child(1)]:before:rounded-md [&>*:nth-child(1)]:before:m-2 [&_div]:m-4 `;
      productSection.appendChild(divEle);
      let btn = document.querySelectorAll("#btn");
      addToCart(btn);
  });
};

window.addEventListener("DOMContentLoaded", function () {
  appendProduct();
});

let catul = document.getElementById("catUl");
let catBtn = document.getElementById("catBtn");

catBtn.addEventListener("click", function () {
  catul.classList.toggle("hidden");
})

let colorsUl = document.getElementById("colorsUl");
let colorsBtn = document.getElementById("colorsBtn");

colorsBtn.addEventListener("click", function () {
  colorsUl.classList.toggle("hidden");
})


let sizeUl = document.getElementById("sizeUl");
let sizeBtn = document.getElementById("sizeBtn");

sizeBtn.addEventListener("click", function () {
  sizeUl.classList.toggle("hidden");
});


let filterBtn = document.getElementById("filterBtn");
let filterBox = document.getElementById("filterBox");
console.log(filterBox, filterBtn);
filterBtn.addEventListener("click", function () {
  filterBox.classList.toggle("hidden");
});

let cartBtn = document.getElementById("cartBtn");
let cart = document.getElementById("cart");

cartBtn.addEventListener("click", function () {
  cart.classList.toggle("translate-x-96");
})
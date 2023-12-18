

let productPage = document.getElementById("productPage");
let bars = document.getElementById("bars");
let box = document.getElementById("box")
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

const renderProduct = (productsArray) => {
    productsArray.forEach((item) => {
        const productDiv = document.createElement("div");
        productDiv.className = "border-2 flex [&_div]:flex-row p-2 m-2 product [&_div]:flex items-center justify-between";
        productDiv.innerHTML = `
                <div>
                    <div>
                            <img src=${item.imageUrl} class="w-20 h-20 p-2 "/>
                    </div>
                    <div id="imgbars">
                        <p class="font-semibold">${item.name} </p>
                        <p>${item.price}</p>
                    </div>
                    <div>
                        <button class="bg-green-300 w-40 h-10 rounded-full">
                            Add to cart
                        </button>
                    </div>
                </div>
            `;
        productPage.appendChild(productDiv);
    });
};

renderProduct(productsArray);

let product = document.querySelectorAll(".product");


box.addEventListener("click", function () {
    productPage.classList.add("flex","flex-wrap","items-center","justify-between","gap-3");
    product.forEach((i) => {
        i.classList = `w-80 h-80 border-2 m-2 [&_div>img]:w-52 [&_div>img]:h-52 [&_div]:flex [&_div]:flex-col [&_div]:items-center [&_div]:justify-between [&_div]:flex-wrap`;
    });

})

bars.addEventListener("click", function () {
    
    productPage.classList.add("flex", "flex-wrap", "items-center", "justify-between", "gap-3","flex-col");
    product.forEach((i) => {
        i.classList = `w-96 h-20 border-2 m-2 [&_div]:flex [&_div]:items-center `;
    });

})
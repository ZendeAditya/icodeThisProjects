document.addEventListener("DOMContentLoaded", function () {
  let productPage = document.getElementById("productPage");
  let searchTerm = document.getElementById("productSearch");
  let productsArray = [
    {
      imageUrl: "https://icodethis.com/images/iCodeMas/tree.png",
      name: "Christmas Tree",
      price: 15.99,
    },
    {
      imageUrl: "https://icodethis.com/images/iCodeMas/gift.png",
      name: "Gift Box",
      price: 12.5,
    },
    {
      imageUrl: "https://icodethis.com/images/iCodeMas/gingerbread_cookie.png",
      name: "Gingerbread Cookie",
      price: 3.99,
    },
    {
      imageUrl: "https://icodethis.com/images/iCodeMas/snowflake.png",
      name: "Snowflake Ornament",
      price: 8.99,
    },
    {
      imageUrl: "https://icodethis.com/images/iCodeMas/star_cookie.png",
      name: "Star Cookie",
      price: 4.5,
    },
    {
      imageUrl: "https://icodethis.com/images/iCodeMas/santa_hat.png",
      name: "Santa Hat",
      price: 9.99,
    },
    {
      imageUrl: "https://icodethis.com/images/iCodeMas/candy_cane.png",
      name: "Candy Cane",
      price: 1.99,
    },
    {
      imageUrl: "https://icodethis.com/images/iCodeMas/snowman_deco.png",
      name: "Snowman Decoration",
      price: 12.99,
    },
    {
      imageUrl: "https://icodethis.com/images/iCodeMas/christmas_ball.png",
      name: "Christmas Ball Ornament",
      price: 6.99,
    },
    {
      imageUrl: "https://icodethis.com/images/iCodeMas/christmas_sock.png",
      name: "Christmas Sock",
      price: 5.5,
    },
    {
      imageUrl: "https://icodethis.com/images/iCodeMas/red_ribbon.png",
      name: "Red Ribbon",
      price: 2.5,
    },
    {
      imageUrl: "https://icodethis.com/images/iCodeMas/tree_cookie.png",
      name: "Tree Cookie",
      price: 4.99,
    },
  ];

  const renderProduct = (productsArray) => {
    productPage.innerHTML = "";

    productsArray.forEach((item) => {
      const productDiv = document.createElement("div");
      productDiv.className = "border-2 flex p-2 m-2";
      productDiv.innerHTML = `
              <img src=${item.imageUrl} class="w-20 h-20 p-2 "/>
              <div>
                  <p class="font-semibold">${item.name} </p>
                  <p>${item.price} </p>
              </div>
          `;
      productPage.appendChild(productDiv);
    });
  };

  const filteredProduct = () => {
    searchTerm.addEventListener("input", function () {
      const filteredProducts = productsArray.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
      console.log(filteredProducts);
      renderProduct(filteredProducts);
    });
  };

  renderProduct(productsArray);
  filteredProduct();
});
